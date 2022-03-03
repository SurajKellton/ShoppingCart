import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import AppConstants from '../../utils/appConstants/AppConstants';
import globalStyles from '../../utils/appConstants/Styles';
import CustomHeader from '../../utils/component/CustomHeader';
import Url from '../../utils/appConstants/ImageUrl';
import {
  renderItem,
  increaseQuantity,
} from '../../utils/commonFunctions/CommonFunctions';

@inject('ProductListStore')
@observer
class Cart extends Component {
  renderHeader = () => {
    const {back, cart, wishlist} = Url.imageUrl;
    const {Red} = globalStyles.colorCodes;
    const {CART, WISHLIST} = AppConstants.SCREENTITLE;
    const {ProductListStore, navigation} = this.props;
    return (
      <CustomHeader
        leftIcon={back}
        screenTitle={CART}
        cart={cart}
        wishlist={wishlist}
        color={Red}
        count={ProductListStore.count}
        wishlistCount={ProductListStore.wishlistCount}
        onHeaderLeftButtonPress={() => navigation.goBack()}
        onHeaderRightButtonPress={() => navigation.navigate(CART)}
        onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
      />
    );
  };

  onPressCancel = item => {
    let id = item.id;
    const {ProductListStore} = this.props;
    if (ProductListStore.productList?.length !== 0) {
      let updatedProductList = ProductListStore.productList?.map(item => {
        if (id === item.id) {
          item.isSelected = false;
          ProductListStore.updatingCount(
            ProductListStore.count - item.itemCount,
          );
          item.itemCount = 1;
        }
        return {...item};
      });
      ProductListStore.updatingData(updatedProductList);
    }
  };

  onPressRemoveItem = item => {
    const {REMOVE_ALERT_FOR_CART} = AppConstants.CONSTANTMSG;
    Alert.alert('', REMOVE_ALERT_FOR_CART, [
      {text: 'No', onPress: () => console.log('Cancel Pressed')},
      {text: 'Yes', onPress: () => this.onPressCancel(item)},
    ]);
  };

  decreaseQuantity = item => {
    let id = item.id;
    const {ProductListStore} = this.props;
    if (ProductListStore.productList?.length !== 0) {
      let countArray = ProductListStore.productList?.map(item => {
        if (id === item.id) {
          item.itemCount = item.itemCount - 1;
          if (id === item.id && item.itemCount > 0) {
            ProductListStore.updatingCount(ProductListStore.count - 1);
          }
          if (item.itemCount === 0) {
            this.onPressRemoveItem(item);
            item.itemCount = 1;
          }
        }
        return {...item};
      });
      ProductListStore.updatingData(countArray);
    }
  };

  renderQuantityBtn = item => {
    const {ButtonBackgroundColor, white, TextColor} = globalStyles.colorCodes;
    const {ProductListStore} = this.props;
    return (
      <View style={styles.quantityBtnView}>
        <TouchableOpacity
          style={styles.quantityBtn(ButtonBackgroundColor, white)}
          onPress={() => {
            this.decreaseQuantity(item);
          }}>
          <Text style={styles.quantityBtnText(white)}>-</Text>
        </TouchableOpacity>
        <Text style={styles.description(TextColor)}> {item.itemCount} </Text>
        <TouchableOpacity
          style={styles.quantityBtn(ButtonBackgroundColor, white)}
          onPress={() => {
            increaseQuantity(item, ProductListStore);
          }}>
          <Text style={styles.quantityBtnText(white)}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderRemoveBtn = item => {
    const {cancel} = Url.imageUrl;
    return (
      <TouchableOpacity
        style={styles.cancelBtnView}
        onPress={() => {
          this.onPressRemoveItem(item);
        }}>
        <Image style={styles.cancelBtn} source={cancel} />
      </TouchableOpacity>
    );
  };

  renderItemList = productList => {
    const {CART} = AppConstants.SCREENTITLE;
    return (
      <View style={styles.listView}>
        <FlatList
          data={productList}
          renderItem={({item}) =>
            renderItem(
              item,
              this.renderQuantityBtn(item),
              this.renderRemoveBtn(item),
              item.category,
              CART,
            )
          }
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  renderNoData = () => {
    const {NODATA} = AppConstants.CONSTANTMSG;
    return (
      <View style={styles.noDataView}>
        <Text style={styles.noDataText}>{NODATA}</Text>
      </View>
    );
  };

  renderBottom = () => {
    const {ButtonBackgroundColor, white} = globalStyles.colorCodes;
    const {SAVEDADDRESS} = AppConstants;
    const {SAVED_ADDRESS} = AppConstants.BUTTONTITLE;
    return (
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.addressBtn(ButtonBackgroundColor)}
          onPress={() => this.props.navigation.navigate(SAVEDADDRESS)}>
          <Text style={styles.bottomButtonText(white)}>{SAVED_ADDRESS}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderList = () => {
    const {ProductListStore} = this.props;
    let productList = [];
    if (ProductListStore.productList?.length !== 0) {
      productList = ProductListStore.productList?.filter(
        arr => arr.isSelected === true,
      );
    }
    return productList.length > 0
      ? this.renderItemList(productList)
      : this.renderNoData();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderList()}
        {this.renderBottom()}
      </SafeAreaView>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    flex: 0.75,
  },
  productDescription: {
    justifyContent: 'center',
    left: 15,
  },
  block: ListBackgroundColor => ({
    backgroundColor: ListBackgroundColor,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  }),
  image: ListBackgroundColor => ({
    width: '100%',
    height: 100,
    borderRadius: 20,
    borderColor: ListBackgroundColor,
  }),
  itemName: TextColor => ({
    fontSize: 19,
    fontWeight: 'bold',
    color: TextColor,
  }),
  quantityBtnText: white => ({
    fontSize: 15,
    fontWeight: 'bold',
    color: white,
  }),
  quantityBtn: ButtonBackgroundColor => ({
    backgroundColor: ButtonBackgroundColor,
    width: '42%',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  }),
  cancelBtnView: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    right: 0,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  description: TextColor => ({
    color: TextColor,
    fontSize: 17,
  }),
  price: TextColor => ({
    color: TextColor,
    fontWeight: 'bold',
    fontSize: 16,
  }),
  cancelBtn: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  quantityBtnView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    justifyContent: 'center',
  },
  listView: {
    padding: 10,
    flex: 1,
  },
  noDataText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  noDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressBtn: ButtonBackgroundColor => ({
    width: '90%',
    height: '60%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ButtonBackgroundColor,
  }),
  bottomButtonText: white => ({
    color: white,
    fontWeight: 'bold',
    fontSize: 15,
  }),
});
