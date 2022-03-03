import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Url from '../appConstants/ImageUrl';
import globalStyles from '../appConstants/Styles';

const CustomHeader = props => {
  const {white, Red, gray} = globalStyles.colorCodes;
  const {cart, wishlist} = Url.imageUrl;
  const countBubbleForCart = () => {
    if (props.count !== 0) {
      return (
        <View style={styles.cartCountView(props.color)}>
          <Text style={styles.cartCountText(white)}>{props.count}</Text>
        </View>
      );
    }
  };
  const countBubbleForWishlist = () => {
    if (props.wishlistCount !== 0) {
      return (
        <View style={styles.cartCountView(props.color)}>
          <Text style={styles.cartCountText(white)}>{props.wishlistCount}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.header(gray)}>
      <View style={styles.leftIconView}>
        <TouchableOpacity
          onPress={() => {
            props.onHeaderLeftButtonPress();
          }}>
          <Image style={styles.leftIcon} source={props.leftIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.headertext}>{props.screenTitle}</Text>
      <View style={styles.rightIconView}>
        <View style={styles.wishlistIconView}>
          <TouchableOpacity
            onPress={() => {
              props.onWishlistButtonPress();
            }}>
            <Image style={styles.wishlistIcon} source={props.wishlist} />
            {countBubbleForWishlist()}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.onHeaderRightButtonPress();
          }}>
          <Image style={styles.rightIcon} source={props.cart} />
          {countBubbleForCart()}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  header: gray => ({
    height: 44,
    flexDirection: 'row',
    //borderBottomWidth: 1,
    //borderBottomColor: gray,
    padding: 8,
    //borderBottomWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  headertext: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    alignItems: 'center',
  },
  leftIconView: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  leftIcon: {
    height: 25,
    width: 25,
    alignSelf: 'flex-start',
  },
  rightIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  wishlistIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  wishlistIconView: {
    flex: 1,
    height: 44,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  rightIconView: {
    flex: 1,
    height: 44,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartCountText: white => ({
    color: white,
    fontWeight: 'bold',
    fontSize: 10,
    alignSelf: 'center',
  }),
  cartCountView: Red => ({
    height: 14,
    width: 14,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: Red,
    borderRadius: 7,
    position: 'absolute',
  }),
});
