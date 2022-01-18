import React, { Component } from 'react';
import AppConstants from '../../appConstants/AppConstants';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import globalStyles from '../../appConstants/Styles';
@inject('ProductListStore')

@observer
class Cart extends Component {
  renderHeader = () => {
    const { CART } = AppConstants.SCREENTITLE
    const { PRODUCTLIST } = AppConstants
    const { TextColor, white, Red } = globalStyles.colorCodes
    return (
      <View style={styles.header}>
        <Text style={styles.headertext}>{CART}</Text>
        <TouchableOpacity
          style={styles.cart}>
          <Image style={styles.cart}
            source={require('../../assets/images/cart.png')}
          />
          <View style={styles.cartCount(Red)}>
            <Text style={styles.cartText(white)}>{ProductListStore.count}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.leftArrow}
          onPress={() => this.props.navigation.navigate(PRODUCTLIST)}>
          <Image style={styles.cart}
            source={require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

  onPressCancel = (item) => {
    let id = item.id
    let ProductListStore = this.props.ProductListStore
    console.log("len", ProductListStore.data.length)
    let updatedProductList = ProductListStore.data.map((item, index) => {
      if (id === index+1) {
        item.isSelected = false
      }
      return { ...item };
    })
    ProductListStore.upDatingData(updatedProductList);
    ProductListStore.upDatingCount(ProductListStore.count-1)
  }

  addMore = (item) => {
    let id = item.id
    let ProductListStore = this.props.ProductListStore
    let countArray = ProductListStore.data.map((item,index)=>{
      if(id === index+1){
        item.itemCount = item.itemCount+1
      }
      return {...item}
    })
    ProductListStore.upDatingData(countArray)
  }

  removeMore = (item) => {
    let id = item.id
    let ProductListStore = this.props.ProductListStore
    let countArray = ProductListStore.data.map((item,index)=>{
      if(id === index+1){
        item.itemCount = item.itemCount-1
        if(item.itemCount === 0){
          item.isSelected = false
          ProductListStore.upDatingCount(ProductListStore.count-1)
        }
      }
      return {...item}
    })
    ProductListStore.upDatingData(countArray)
  }

  renderItem = (item) =>{
    const { DESCRIPTION } = AppConstants.CONSTANTDESCRIPTION
    const {ButtonBackGroundColor, white} = globalStyles.colorCodes;
    let q = item.itemCount
    let p = item.price
    let Quantity = q*p
    return(
    <View style={styles.block}>
            <View style={styles.imageView}>
              <Image style={styles.image}
                source={{ uri: item.image }} />
              <View style={styles.buttons}>
              <TouchableOpacity style={styles.addToCarts(ButtonBackGroundColor, white)}
                onPress={() => {this.addMore(item)}}>
                <Text style={styles.buttonText(white)}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addToCarts(ButtonBackGroundColor, white)}
                onPress={() => {this.removeMore(item)}}>
                <Text style={styles.buttonText(white)}>-</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={styles.productDescription}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.description}>{DESCRIPTION} {item.description}</Text>
              <Text style={styles.description}>Quantity:{item.itemCount}</Text>
              <Text style={styles.price}>{Quantity}</Text>
            </View>
            <TouchableOpacity
              style={styles.addToCart}
              onPress={() => {this.onPressCancel(item)}}>
              <Image style={styles.cancel}
                source={require('../../assets/images/cancel.png')} />
            </TouchableOpacity>
          </View>
    )
  }

  renderList = () => {
    let ProductListStore = this.props.ProductListStore
    let tempArr = ProductListStore.data.filter(arr => arr.isSelected === true);
    return (
      <FlatList
        data={tempArr}
        renderItem={({ item}) =>
        this.renderItem(item)}
        keyExtractor={item => item.id}
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
export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headertext: {
    fontSize: 20,
    color: 'black',
    marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center'
  },
  header: {
    height: 44,
    flexDirection: 'column',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  imageView: {
    alignItems: 'center',
    flex: 0.75
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
  leftArrow: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginTop: 4,
    left: 4,
    top: 0,
    position: 'absolute'
  },
  productDescription: {
    justifyContent: 'center',
    left: 7,
  },
  cartCount:(Red)=> ({
    height: 15,
    width: 15,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    backgroundColor: Red,
    position: 'absolute',
    borderRadius: 7.5
  }),
  block: {
    backgroundColor: '#b0c4de',
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    paddingHorizontal: 5
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#b0c4de'
  },
  itemName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonText:(white)=>({
    fontSize: 15,
    fontWeight: 'bold',
    color: white,
  }),
  addToCarts: (ButtonBackGroundColor) => ({
    backgroundColor: ButtonBackGroundColor,
    width: "40%",
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
  }),
  addToCart: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    right: 0,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
  },
  description: {
    color: 'black',
    fontSize: 17
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  cartBox: {
    height: 50,
    width: 50,
    color: 'pink',
    alignSelf: 'flex-end',
    position: 'absolute'
  },
  cartText: (white) => ( {
    color: white,
    fontWeight: 'bold',
    fontSize: 12
  }),
  cancel: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    position: 'absolute'
  },
  buttons: {
    flexDirection: 'row',
    width: "65%",
    justifyContent: 'center'
  } 
});