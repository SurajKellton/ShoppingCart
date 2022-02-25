import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import Url from '../../utils/appConstants/ImageUrl';
import AppConstants from '../../utils/appConstants/AppConstants';
import CustomHeader from '../../utils/component/CustomHeader';
import {
  renderItem,
  renderButtons,
} from '../../utils/commonFunctions/CommonFunctions';

@inject('ProductListStore')
@observer
class SubCategory extends Component {
  async componentDidMount() {
    const {ProductListStore} = this.props;
    if (ProductListStore.productList?.length !== 0) {
      let modifiedProductList = ProductListStore.productList?.map(item => {
        item.isSelected = false;
        item.itemCount = 1;
        item.wishlist = false;
        return {...item};
      });
      ProductListStore.updatingData(modifiedProductList);
    }
  }

  renderHeader = () => {
    const {back} = Url.imageUrl;
    const {CART, WISHLIST} = AppConstants;
    const {ProductListStore, navigation} = this.props;
    {
      this.renderSubcategoryName();
    }
    return (
      <CustomHeader
        leftIcon={back}
        screenTitle={ProductListStore.subCategory}
        count={ProductListStore.count}
        wishlistCount={ProductListStore.wishlistCount}
        onHeaderLeftButtonPress={() => navigation.goBack()}
        onHeaderRightButtonPress={() => navigation.navigate(CART)}
        onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
      />
    );
  };

  renderSubcategoryName = () => {
    const {ProductListStore} = this.props;
    let subCategory = this.props.route?.params?.subCategory || '';
    ProductListStore.updatingSubCategory(subCategory);
  };

  onWishlistPress = item => {
    const {ProductListStore} = this.props;
    let id = item.id;
    if (ProductListStore.productList?.length !== 0) {
      let modifiedProductList = ProductListStore.productList?.map(item => {
        if (id === item.id) {
          item.wishlist = !item.wishlist;
          if (item.wishlist === true) {
            ProductListStore.updatingWishlistCount(
              ProductListStore.wishlistCount + 1,
            );
          } else {
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

  renderWishlistBtn = item => {
    const {wishlist, addedToWishlist} = Url.imageUrl;
    return (
      <View style={styles.wishlistBtnView}>
        <TouchableOpacity
          onPress={() => {
            this.onWishlistPress(item);
          }}>
          <Image
            style={styles.wishlistBtn}
            source={item.wishlist ? addedToWishlist : wishlist}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderItemList = cartArray => {
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
  };

  renderNoProduct = () => {
    const {NOPRODUCT} = AppConstants.CONSTANTMSG;
    return (
      <View style={styles.noProductTextView}>
        <Text style={styles.noProductText}>{NOPRODUCT}</Text>
      </View>
    );
  };

  renderList = () => {
    const {ProductListStore} = this.props;
    {
      this.renderSubcategoryName();
    }
    let cartArray = [];
    if (ProductListStore.productList?.length !== 0) {
      cartArray = ProductListStore.productList?.filter(
        arr => arr.name === ProductListStore.subCategory,
      );
    }
    return cartArray.length > 0
      ? this.renderItemList(cartArray)
      : this.renderNoData();
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
export default SubCategory;

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
