import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppConstants from "../appConstants/AppConstants";
import Cart from "../../scenes/cart/Cart";
import SideBarApp from "./SideBarApp";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppConstants.PRODUCTLIST">
        <Stack.Screen name={AppConstants.SIDEBARAPP} component={SideBarApp} options={{ headerShown: false }} />
        <Stack.Screen name={AppConstants.CART} component={Cart} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;

