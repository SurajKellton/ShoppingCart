import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import AppConstants from '../../appConstants/AppConstants';
import globalStyles from '../../appConstants/Styles';
import { observer, inject } from 'mobx-react';
@inject('ProductListStore')

@observer
class ProductList extends Component {
  componentDidMount() {
    let ProductListStore = this.props.ProductListStore
    let arr = ProductListStore.data.map((item) => {
      item.isSelected = false
      item.itemCount = 1
      return { ...item };
    })
    ProductListStore.upDatingData(arr)
    ProductListStore.upDatingPage(0)
    ProductListStore.isLoading = false,
    function () { this.addRecords(0); }
  }

  addRecords = (page) => {
    const newRecords = []
    let ProductListStore = this.props.ProductListStore
    for (var i = page * 10, il = i + 10; i < il && i <
      ProductListStore.data.length; i++) {
      newRecords.push(ProductListStore.data[i]);
    }
    ProductListStore.upDatingProduct([...ProductListStore.product, ...newRecords])
  }

  onScrollHandler = () => {
    let ProductListStore = this.props.ProductListStore
    ProductListStore.page = ProductListStore.page + 1,
      () => {
        this.addRecords(ProductListStore.page);
      };
  }

  renderHeader = () => {
    const { PRODUCTLIST } = AppConstants.SCREENTITLE
    const { CART } = AppConstants
    const { TextColor, white, Red } = globalStyles.colorCodes
    const { headertext } = globalStyles
    ProductListStore = this.props.ProductListStore
    return (
      <View style={styles.header(white)}>
        <Text style={styles.headertext(TextColor)}>{PRODUCTLIST}</Text>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => this.props.navigation.navigate(CART)}>
          <Image style={styles.cart}
            source={require('../../assets/images/cart.png')}
          />
          <View style={styles.cartCount(Red)}>
            <Text style={styles.cartText(white)}>{ProductListStore.count}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  onBtnPress = (item) => {
    ProductListStore = this.props.ProductListStore
    let id = item.id
    let arr = ProductListStore.data.map((item, index) => {
      if (id == index + 1) {
        console.log("id,index", id, index + 1)
        item.isSelected = true
      }
      return { ...item }
    })
    if (item.isSelected == true) {
      ProductListStore.upDatingCount(ProductListStore.count+1)
    }
    ProductListStore.upDatingArrr(arr)
    ProductListStore.upDatingData(arr)
    tempArr = arr.filter(arr => arr.isSelected == true);
  }

  renderList = () => {
    ProductListStore = this.props.ProductListStore
    const { DESCRIPTION } = AppConstants.CONSTANTDESCRIPTION
    const { ADDED, ADDTOCART } = AppConstants.BUTTONTITLE
    const { ListBackGroundColor, TextColor, ButtonBackGroundColor, white } = globalStyles.colorCodes
    return (
      <FlatList
        data={ProductListStore.data}
        renderItem={({ item, index }) =>
          <View style={styles.block(ListBackGroundColor)}>
            <View>
              <Image style={styles.image(ListBackGroundColor)}
                source={{ uri: item.image }} />
              <TouchableOpacity style={styles.addToCart(ButtonBackGroundColor)}
                disabled={item.isSelected ? true : false}
                onPress={() => {this.onBtnPress(item)}}>
                <Text style={styles.buttonText(white)}>{item.isSelected ? ADDED : ADDTOCART}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productDescription}>
              <Text style={styles.itemName(TextColor)}>{item.name}</Text>
              <Text style={styles.description(TextColor)}>{DESCRIPTION} {item.description}</Text>
              <Text style={styles.price(TextColor)}>Rs: {item.price}</Text>

            </View>
          </View>}
        keyExtractor={item => item.id}
        onEndReached={this.onScrollHandler}
        onEndThreshold={0}
      />
    )
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderList()}
      </SafeAreaView>
    )
  }
}
export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertext: (TextColor) => ({
    fontSize: 20,
    color: TextColor,
    alignSelf: 'center',
    alignItems: 'center'
  }),
  header: (white) => ({
    height: 44,
    flexDirection: 'column',
    borderBottomWidth: 1,
    backgroundColor: white,
    justifyContent: 'center',
    paddingHorizontal: 10
  }),
  productDescription: {
    justifyContent: 'center',
    marginLeft: 8
  },
  cart: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginTop: 4,
    right: 5,
    top: 0,
    position: 'absolute'
  },
  cartCount: (Red) => ({
    height: 16,
    width: 16,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: Red,
    position: 'absolute',
    borderRadius: 8
  }),
  block: (ListBackGroundColor) => ({
    backgroundColor: ListBackGroundColor,
    flexDirection: 'row',
    marginBottom: 5,
    paddingVertical: 0,
  }),
  image: (ListBackGroundColor) => ({
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: ListBackGroundColor
  }),
  itemName: (TextColor) => ({
    fontSize: 19,
    fontWeight: 'bold',
    color: TextColor
  }),
  buttonText: (white) => ({
    fontSize: 15,
    fontWeight: 'bold',
    color: white,
  }),
  addToCart: (ButtonBackGroundColor) => ({
    backgroundColor: ButtonBackGroundColor,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  }),
  description: (TextColor) => ({
    color: TextColor,
    fontSize: 17
  }),
  price: (TextColor) => ({
    color: TextColor,
    fontWeight: 'bold',
    fontSize: 16
  }),
  cartText: (white) => ({
    color: white,
    fontWeight: 'bold',
    fontSize: 12
  })
});