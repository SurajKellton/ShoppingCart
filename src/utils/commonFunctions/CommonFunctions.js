import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppConstants from '../appConstants/AppConstants';
import globalStyles from '../appConstants/Styles';

const productDescription = item => {
  const {DESCRIPTION, RS} = AppConstants.CONSTANTHEADINGS;
  const {TextColor} = globalStyles.colorCodes;
  return (
    <View style={styles.productDescription}>
      <Text style={styles.itemName(TextColor)}>{item.name}</Text>
      <Text style={styles.description(TextColor)}>
        {DESCRIPTION} {item.description}
      </Text>
      <Text style={styles.price(TextColor)}>
        {RS}
        {item.price}
      </Text>
    </View>
  );
};

const productDescriptionForCart = (item, category) => {
  const {DESCRIPTION, CATEGORY, TOTALPRICE} = AppConstants.CONSTANTHEADINGS;
  const {TextColor} = globalStyles.colorCodes;
  let itemCount = item.itemCount;
  let price = item.price;
  let totalPrice = itemCount * price;
  return (
    <View style={styles.productDescription}>
      <Text style={styles.itemName(TextColor)}>{item.name}</Text>
      <Text style={styles.description(TextColor)}>
        {CATEGORY} {category}
      </Text>
      <Text style={styles.description(TextColor)}>
        {DESCRIPTION} {item.description}
      </Text>
      <Text style={styles.price(TextColor)}>
        {TOTALPRICE}
        {totalPrice}
      </Text>
    </View>
  );
};

const onAddToCartPress = (item, ProductListStore) => {
  let id = item.id;
  if (ProductListStore.productList?.length !== 0) {
    let modifiedProductList = ProductListStore.productList?.map(item => {
      if (id === item.id) {
        item.isSelected = true;
      }
      return {...item};
    });
    if (item.isSelected == true) {
      ProductListStore.updatingCount(ProductListStore.count + 1);
    }
    ProductListStore.updatingData(modifiedProductList);
  }
};

export const increaseQuantity = (item, ProductListStore) => {
  let id = item.id;
  if (ProductListStore.productList?.length !== 0) {
    let countArray = ProductListStore.productList?.map(item => {
      if (id === item.id) {
        item.itemCount = item.itemCount + 1;
        ProductListStore.updatingCount(ProductListStore.count + 1);
      }
      return {...item};
    });
    ProductListStore.updatingData(countArray);
  }
};

const decreaseQuantity = (item, ProductListStore) => {
  let id = item.id;
  if (ProductListStore.productList?.length !== 0) {
    let countArray = ProductListStore.productList?.map(item => {
      if (id === item.id) {
        item.itemCount = item.itemCount - 1;
        if (id === item.id && item.itemCount > 0) {
          ProductListStore.updatingCount(ProductListStore.count - 1);
        }
        if (item.itemCount === 0) {
          item.isSelected = false;
          ProductListStore.updatingCount(ProductListStore.count - 1);
          item.itemCount = 1;
        }
      }
      return {...item};
    });
    ProductListStore.updatingData(countArray);
  }
};

const renderQuantity = item => {
  const {TextColor} = globalStyles.colorCodes;
  if (item.isSelected === true) {
    return (
      <Text style={styles.description(TextColor)}> {item.itemCount} </Text>
    );
  }
};

export const renderQuantityBtns = (item, ProductListStore) => {
  const {ButtonBackgroundColor, white} = globalStyles.colorCodes;
  if (item.isSelected === true) {
    return (
      <View style={styles.quantityBtnView}>
        <TouchableOpacity
          style={styles.quantityBtn(ButtonBackgroundColor, white)}
          onPress={() => {
            decreaseQuantity(item, ProductListStore);
          }}>
          <Text style={styles.buttonText(white)}>-</Text>
        </TouchableOpacity>
        {renderQuantity(item)}
        <TouchableOpacity
          style={styles.quantityBtn(ButtonBackgroundColor, white)}
          onPress={() => {
            increaseQuantity(item, ProductListStore);
          }}>
          <Text style={styles.buttonText(white)}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export const renderItem = (
  item,
  renderAddtoCartButton,
  renderWishlistIcon,
  category,
  screenTitle,
) => {
  const {ListBackgroundColor} = globalStyles.colorCodes;
  return (
    <View style={styles.block(ListBackgroundColor)}>
      <View style={styles.imageView}>
        <Image
          style={styles.image(ListBackgroundColor)}
          source={{uri: item.image}}
        />
        {renderAddtoCartButton}
      </View>
      {screenTitle === 'Cart'
        ? productDescriptionForCart(item, category)
        : productDescription(item)}
      {renderWishlistIcon}
    </View>
  );
};

export const renderAddToCartBtn = (item, ProductListStore) => {
  const {ButtonBackgroundColor, white} = globalStyles.colorCodes;
  const {ADDTOCART} = AppConstants.BUTTONTITLE;
  return (
    <TouchableOpacity
      style={styles.addToCartBtn(ButtonBackgroundColor)}
      disabled={item.isSelected ? true : false}
      onPress={() => {
        onAddToCartPress(item, ProductListStore);
      }}>
      <Text style={styles.buttonText(white)}>{ADDTOCART}</Text>
    </TouchableOpacity>
  );
};

export const renderButtons = (item, ProductListStore) => {
  return item.isSelected === false
    ? renderAddToCartBtn(item, ProductListStore)
    : renderQuantityBtns(item, ProductListStore);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productDescription: {
    justifyContent: 'center',
  },
  block: ListBackgroundColor => ({
    backgroundColor: ListBackgroundColor,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
  }),
  imageView: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: () => ({
    width: '100%',
    height: 100,
    borderRadius: 15,
  }),
  itemName: TextColor => ({
    fontSize: 19,
    fontWeight: 'bold',
    color: TextColor,
  }),
  buttonText: white => ({
    fontSize: 15,
    fontWeight: 'bold',
    color: white,
  }),
  addToCartBtn: ButtonBackgroundColor => ({
    backgroundColor: ButtonBackgroundColor,
    width: '100%',
    borderRadius: 10,
    marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
  }),
  description: TextColor => ({
    color: TextColor,
    fontSize: 17,
  }),
  quantityBtnView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  quantityBtn: ButtonBackgroundColor => ({
    backgroundColor: ButtonBackgroundColor,
    width: '42%',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  }),
  price: TextColor => ({
    color: TextColor,
    fontWeight: 'bold',
    fontSize: 16,
  }),
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
});
