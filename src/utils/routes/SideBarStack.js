import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppConstants from "../appConstants/AppConstants";
import ProductList from "../../scenes/productList/ProductList";
import { DrawerContent } from "./CustomSideBar";
import SubCategory from "../../scenes/subCategory/SubCategory";
import Wishlist from "../../scenes/wishlist/Wishlist";
import Adress from "../../scenes/cart/Adress";
import SavedAdress from "../../scenes/cart/SavedAddress";

const Drawer = createDrawerNavigator();

function SideBarStack() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={AppConstants.PRODUCTLIST} component={ProductList} options={{ headerShown: false }} />
      <Drawer.Screen name={AppConstants.SUBCATEGORY} component={SubCategory} options={{ headerShown: false }} />
      <Drawer.Screen name={AppConstants.WISHLIST} component={Wishlist} options={{ headerShown: false }} />
      <Drawer.Screen name={AppConstants.ADDRESS} component={Adress} options={{ headerShown: false }} />
      <Drawer.Screen name={AppConstants.SAVEDADDRESS} component={SavedAdress} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
export default SideBarStack;

