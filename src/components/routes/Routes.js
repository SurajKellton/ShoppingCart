import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppConstants from "../../appConstants/AppConstants";
import ProductList from "../../components/productList/ProductList";
import Cart from "../../components/cart/Cart";

const Stack = createStackNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "AppConstants.PRODUCTLIST">
          <Stack.Screen name = {AppConstants.PRODUCTLIST} component = {ProductList} options = {{headerShown: false}}/> 
          <Stack.Screen name = {AppConstants.CART} component = {Cart} options = {{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Routes;

