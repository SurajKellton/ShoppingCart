import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import Url from '../../utils/appConstants/ImageUrl';
import AppConstants from '../../utils/appConstants/AppConstants';
import CustomHeader from '../../utils/component/CustomHeader';
import { renderItem, renderButtons } from '../../utils/commonFunctions/CommonFunctions';

@inject('ProductListStore')
@observer
class Wishlist extends Component {
  renderHeader = () => {
    const {back} = Url.imageUrl;
    const {CART} = AppConstants;
    const {WISHLIST} = AppConstants.SCREENTITLE;
    const {ProductListStore, navigation} = this.props;
    return (
      <CustomHeader
        leftIcon={back}
        screenTitle={WISHLIST}
        count={ProductListStore.count}
        wishlistCount={ProductListStore.wishlistCount}
        onHeaderLeftButtonPress={() => navigation.goBack()}
        onHeaderRightButtonPress={() => navigation.navigate(CART)}
        onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
      />
    );
  };

  onWishlistPress = item => {
    const {ProductListStore} = this.props;
    let id = item.id;
    if (ProductListStore.productList?.length !== 0) {
      let modifiedProductList = ProductListStore.productList?.map(item => {
        if (id === item.id) {
          item.wishlist = !item.wishlist;
          if (item.wishlist === false) {
            ProductListStore.updatingWishlistCount(
              ProductListStore.wishlistCount - 1,
            );
          }
        }
        return {...item};
      });
      ProductListStore.updatingData(modifiedProductList);
    }
  };

  renderWishlistAlert = item => {
    const {REMOVE_ALERT_FOR_WISHLIST} = AppConstants.CONSTANTMSG;
    Alert.alert('', REMOVE_ALERT_FOR_WISHLIST, [
      {text: 'No', onPress: () => console.log('Cancel Pressed')},
      {text: 'Yes', onPress: () => this.onWishlistPress(item)},
    ]);
  };

  renderWishlistBtn = item => {
    const {wishlist, addedToWishlist} = Url.imageUrl;
    return (
      <View style={styles.wishlistBtnView}>
        <TouchableOpacity
          onPress={() => {
            this.renderWishlistAlert(item);
          }}>
          <Image
            style={styles.wishlistBtn}
            source={item.wishlist ? addedToWishlist : wishlist}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderItemList = (cartArray) => {
    const {ProductListStore} = this.props;
    return (
      <View style={styles.listView}>
        <FlatList
          data={cartArray}
          renderItem={({item}) =>
          renderItem(
            item,
            renderButtons(item, ProductListStore),
            this.renderWishlistBtn(item),
          )
        }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  renderNoProduct = () => {
    const {NO_PRODUCT_WISHLIST} = AppConstants.CONSTANTMSG;
    return (
      <View style={styles.noProductTextView}>
        <Text style={styles.noProductText}>{NO_PRODUCT_WISHLIST}</Text>
      </View>
    );
  };

  renderList = () => {
    const {ProductListStore} = this.props;
    let cartArray = []
    if (ProductListStore.productList?.length !== 0) {
        cartArray = ProductListStore.productList?.filter(
        arr => arr.wishlist === true,
      );
    }
    return cartArray.length > 0
    ? this.renderItemList(cartArray)
    : this.renderNoProduct();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderList()}
      </SafeAreaView>
    );
  }
}
export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    padding: 10,
    flex: 1,
  },
  noProductText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  noProductTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  wishlistBtn: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  wishlistBtnView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
