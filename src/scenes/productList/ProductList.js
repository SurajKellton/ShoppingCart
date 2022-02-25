import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import AppConstants from '../../utils/appConstants/AppConstants';
import Url from '../../utils/appConstants/ImageUrl';
import CustomHeader from '../../utils/component/CustomHeader';

class ProductList extends Component {
  render() {
    const {hamburgerIcon} = Url.imageUrl;
    const {CART, WISHLIST} = AppConstants;
    const {FASHION} = AppConstants.CONSTANTHEADINGS;
    const {PRODUCTLIST} = AppConstants.SCREENTITLE;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <CustomHeader
          leftIcon={hamburgerIcon}
          screenTitle={PRODUCTLIST}
          count={0}
          wishlistCount={0}
          onHeaderLeftButtonPress={() => navigation.toggleDrawer()}
          onHeaderRightButtonPress={() => navigation.navigate(CART)}
          onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
        />
        <View style={styles.fashionTextView}>
          <Text style={styles.fashionText}> {FASHION} </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fashionText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  fashionTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

/*
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import AppConstants from '../../utility/appConstants/AppConstants';
import globalStyles from '../../utility/appConstants/Styles';
import { observer, inject } from 'mobx-react';
import Url from '../../utility/appConstants/ImageUrl';
import CustomHeader from '../../utility/reusableComponent/CustomHeader';
@inject('ProductListStore')

@observer
class ProductList extends Component {
 componentDidMount() {
   const { ProductListStore } = this.props
   let modifiedArray = ProductListStore.productList.map((item) => {
     item.isSelected = false
     item.itemCount = 1
     return { ...item };
   })
   ProductListStore.updatingData(modifiedArray)
   ProductListStore.updatingPage(0)
   ProductListStore.isLoading = false,
     function () { this.addRecords(0); }
 }

 addRecords = (page) => {
   const newRecords = []
   const { ProductListStore } = this.props
   for (var i = page * 10, il = i + 10; i < il && i <
     ProductListStore.productList.length; i++) {
     newRecords.push(ProductListStore.productList[i]);
   }
   ProductListStore.updatingProductList([...ProductListStore.productList, ...newRecords])
 }

 onScrollHandler = () => {
   const { ProductListStore } = this.props
   ProductListStore.page = ProductListStore.page + 1,
     () => {
       this.addRecords(ProductListStore.page);
     };
 }

 onBtnPress = (item) => {
   const { ProductListStore } = this.props
   let id = item.id
   let modifiedArray = ProductListStore.productList.map((item) => {
     if (id === item.id) {
       item.isSelected = true
     }
     return { ...item }
   })
   if (item.isSelected == true) {
     ProductListStore.updatingCount(ProductListStore.count + 1)
   }
   ProductListStore.updatingData(modifiedArray)
 }

 renderItem = (item) => {
   const { ProductListStore } = this.props;
   const { DESCRIPTION } = AppConstants.CONSTANTHEADINGS;
   const { ADDED, ADDTOCART } = AppConstants.BUTTONTITLE;
   const { ListBackgroundColor, TextColor, ButtonBackgroundColor, white } = globalStyles.colorCodes;
   return (
     <View style={styles.block(ListBackgroundColor)}>
       <View>
         <Image style={styles.image(ListBackgroundColor)}
           source={{ uri: item.image }} />
         <TouchableOpacity style={styles.addToCart(ButtonBackgroundColor)}
           disabled={item.isSelected ? true : false}
           onPress={() => { this.onBtnPress(item) }}>
           <Text style={styles.buttonText(white)}>{item.isSelected ? ADDED : ADDTOCART}</Text>
         </TouchableOpacity>
       </View>
       <View style={styles.productDescription}>
         <Text style={styles.itemName(TextColor)}>{item.name}</Text>
         <Text style={styles.description(TextColor)}>{DESCRIPTION} {item.description}</Text>
         <Text style={styles.price(TextColor)}>Rs: {item.price}</Text>
       </View>
     </View>
   )
 }

 renderList = () => {
   const { ProductListStore } = this.props
   return (
     <View style={styles.listView}>
       <FlatList
         data={ProductListStore.productList}
         renderItem={({ item }) =>
           this.renderItem(item)
         }
         keyExtractor={item => item.id}
         onEndReached={this.onScrollHandler}
         onEndThreshold={0}
       />
     </View>
   )
 };

 render() {
   const { hamburgerIcon } = Url.imageUrl;
   const { CART } = AppConstants;
   const { PRODUCTLIST } = AppConstants.SCREENTITLE;
   const { ProductListStore } = this.props;
   return (
     <SafeAreaView style={styles.container}>
       <CustomHeader
         leftIcon={hamburgerIcon}
         screenTitle={PRODUCTLIST}
         count={ProductListStore.count}
         onHeaderLeftButtonPress={() => this.props.navigation.toggleDrawer()}
         onHeaderRightButtonPress={() => this.props.navigation.navigate(CART)}
       />
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
 productDescription: {
   justifyContent: 'center',
   marginLeft: 8
 },
 block: (ListBackgroundColor) => ({
   backgroundColor: ListBackgroundColor,
   flexDirection: 'row',
   marginBottom: 5,
   paddingVertical: 5,
   paddingHorizontal: 5
 }),
 image: (ListBackgroundColor) => ({
   width: 100,
   height: 100,
   resizeMode: 'contain',
   // borderWidth: 5,
   borderRadius: 15,
   borderColor: ListBackgroundColor
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
 addToCart: (ButtonBackgroundColor) => ({
   backgroundColor: ButtonBackgroundColor,
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
 listView: {
   padding: 5
 }
});
*/
