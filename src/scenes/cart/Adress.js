import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import {action, makeObservable, observable} from 'mobx';
import {observer, inject} from 'mobx-react';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';
import Url from '../../utils/appConstants/ImageUrl';
import AppConstants from '../../utils/appConstants/AppConstants';
import CustomHeader from '../../utils/component/CustomHeader';
import CustomTextInput from '../../utils/component/CustomTextInput';
import globalStyles from '../../utils/appConstants/Styles';

@inject('ProductListStore')
@observer
class Adress extends Component {
  @observable id = 0;
  @observable addressType = false;
  @observable dropDownItem = '';
  //@observable position = new Animated.Value(0);

  @action updateValue = value => {
    this.dropDownItem = value;
  };

  @action updateAddressType = () => {
    this.addressType = !this.addressType;
  };

  constructor() {
    super();
    makeObservable(this);
  }

  async componentDidMount() {}

  renderHeader = () => {
    const {back} = Url.imageUrl;
    const {CART} = AppConstants;
    const {ADDRESS} = AppConstants.SCREENTITLE;
    const {ProductListStore, navigation} = this.props;
    return (
      <CustomHeader
        leftIcon={back}
        screenTitle={ADDRESS}
        count={ProductListStore.count}
        wishlistCount={ProductListStore.wishlistCount}
        onHeaderLeftButtonPress={() => navigation.goBack()}
        onHeaderRightButtonPress={() => navigation.navigate(CART)}
        onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
      />
    );
  };

  // onPressSave = () => {
  //   const {ProductListStore} = this.props;
  //   const {REMOVE_ALERT_FOR_WISHLIST} = AppConstants.CONSTANTMSG;
  //   if (ProductListStore.nameTF.length == 0){
  //   Alert.alert('', 'Please Enter Name', [
  //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
  //     {text: 'Ok', onPress: () => console.log('ok Pressed')},
  //   ]);}else{
  //     Alert.alert('', 'Form Saved', [
  //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
  //       {text: 'Ok', onPress: () => console.log('ok Pressed')},
  //     ]);
  //   }
  // };

  renderBottom = () => {
    const {ligt_gray, TextColor, orange, Cancel_Btn, Light_Green} =
      globalStyles.colorCodes;
    const {HOME, WORK, SAVE, CANCEL} = AppConstants.BUTTONTITLE;
    const {tick} = Url.imageUrl;
    return (
      <View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={
              this.addressType
                ? styles.addressTypeBtnForActive(Cancel_Btn, Light_Green)
                : styles.addressTypeBtnForInactive(Cancel_Btn)
            }
            onPress={() => this.updateAddressType()}>
            <Image
              style={
                this.addressType
                  ? styles.tickIconActive(Light_Green)
                  : styles.tickIconInactive
              }
              source={tick}></Image>
            <Text style={styles.bottomButtonText(TextColor)}> {HOME} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              !this.addressType
                ? styles.addressTypeBtnForActive(Cancel_Btn, Light_Green)
                : styles.addressTypeBtnForInactive(Cancel_Btn)
            }
            onPress={() => this.updateAddressType()}>
            <Image
              style={
                !this.addressType
                  ? styles.tickIconActive(Light_Green)
                  : styles.tickIconInactive
              }
              source={tick}></Image>
            <Text style={styles.bottomButtonText(TextColor)}> {WORK} </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bottomBtn(orange)}>
        {/* onPress={() => this.onPressSave()}> */}
          <Text style={styles.bottomButtonText(TextColor)}>{SAVE}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtn(Cancel_Btn)}>
          <Text style={styles.bottomButtonText(TextColor)}>{CANCEL}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderDropdown = () => {
    let list = [
      'Select State',
      'Uttarakhand',
      'Delhi',
      'Goa',
      'J&K',
      'Hariyana',
    ];
    return (
      <View style={styles.dropDownView}>
        <Picker
          style={styles.textFields}
          mode="dropdown"
          selectedValue={this.dropDownItem}
          onValueChange={itemValue => this.updateValue(itemValue)}>
          {list.map((item, index) => {
            return <Picker.Item label={item} value={index} key={index} />;
          })}
        </Picker>
      </View>
    );
  };

  onChangeText = (text, updateTextFieldObservable) => {
    const {ProductListStore} = this.props;
    ProductListStore.updatingTextFieldText(text);
    {
      updateTextFieldObservable;
    }
  };

  renderForm = () => {
    const {ProductListStore} = this.props;
    const {ADDRESS, ADD_ADDRESS, ADDRESS_TYPE} = AppConstants.CONSTANTHEADINGS;
    const {
      NAME,
      CONTACT,
      PINCODE,
      LOCALITY,
      ADDRESS_PLACEHOLDER,
      CITY,
      LANDMARK,
      ALTERNATIVE,
    } = AppConstants.PLACEHOLDERS;
    return (
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.titleText}>{ADDRESS}</Text>
        <Text style={styles.subtitleText}>{ADD_ADDRESS}</Text>
        <CustomTextInput
          placeholder={NAME}
          //id = {1}
          onChangeText={() =>
            this.onChangeText(
              NAME,
              ProductListStore.updatingName(ProductListStore.textFieldText),
            )
          }
          // onFocus = {() => ProductListStore.updatingidTF(1)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <CustomTextInput
          placeholder={CONTACT}
          //id = {2}
          onChangeText={() =>
            this.onChangeText(
              CONTACT,
              ProductListStore.updatingContact(ProductListStore.textFieldText),
            )
          }
          // onFocus = {() => ProductListStore.updatingidTF(2)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
          keyboardType="numeric"></CustomTextInput>
        <CustomTextInput
          placeholder={PINCODE}
          //id = {3}
          onChangeText={() =>
            this.onChangeText(
              PINCODE,
              ProductListStore.updatingPin(ProductListStore.textFieldText),
            )
          }
          // onFocus = {() => ProductListStore.updatingidTF(3)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <CustomTextInput
          placeholder={LOCALITY}
          //id = {4}
          // onFocus = {() => ProductListStore.updatingidTF(4)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <CustomTextInput
          placeholder={ADDRESS_PLACEHOLDER}
          //id = {5}
          // onFocus = {() => ProductListStore.updatingidTF(5)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <CustomTextInput
          placeholder={CITY}
          //id = {6}
          // onFocus = {() => ProductListStore.updatingidTF(6)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        {this.renderDropdown()}
        <CustomTextInput
          placeholder={LANDMARK}
          //id = {7}
          // onFocus = {() => ProductListStore.updatingidTF(7)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <CustomTextInput
          placeholder={ALTERNATIVE}
          //id = {8}
          keyboardType="numeric"
          // onFocus = {() => ProductListStore.updatingidTF(8)}
          // onBlur = {() => ProductListStore.updatingidTF(0)}
        ></CustomTextInput>
        <Text style={styles.bottomtitleText}>{ADDRESS_TYPE}</Text>
        {this.renderBottom()}
      </ScrollView>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderForm()}
      </SafeAreaView>
    );
  }
}
export default Adress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 20,
    backgroundColor: globalStyles.colorCodes.Address_Screen_BG,
  },
  titleText: {
    fontWeight: 'bold',
    color: globalStyles.colorCodes.TextColor,
    fontSize: 15,
  },
  subtitleText: {
    fontSize: 15,
    paddingBottom: 10,
    color: globalStyles.colorCodes.TextColor,
  },
  textFieldTitle: {
    paddingHorizontal: 20,
    marginTop: 5,
    fontSize: 15,
    color: globalStyles.colorCodes.TextColor,
  },
  bottomButtonText: white => ({
    color: white,
    fontWeight: 'bold',
    fontSize: 15,
  }),
  bottomBtn: ButtonBackgroundColor => ({
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: ButtonBackgroundColor,
  }),
  addressTypeBtnForActive: (ButtonBackgroundColor, Light_Green) => ({
    flexDirection: 'row',
    width: '45%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Light_Green,
    backgroundColor: ButtonBackgroundColor,
  }),
  addressTypeBtnForInactive: ButtonBackgroundColor => ({
    flexDirection: 'row',
    width: '45%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: ButtonBackgroundColor,
  }),
  addressTypeBtnBorder: color => ({
    borderColor: color,
  }),
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  bottomtitleText: {
    fontWeight: 'bold',
    color: globalStyles.colorCodes.TextColor,
    fontSize: 15,
    paddingVertical: 15,
  },
  textFields: {
     fontSize: 15,
  },
  dropDownView: {
    paddingLeft: 9,
    paddingVertical: 0,
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 10,
    backgroundColor: globalStyles.colorCodes.ligt_gray,
  },
  title: {
    color: globalStyles.colorCodes.TextColor,
    backgroundColor: globalStyles.colorCodes.white,
  },
  titleView: {
    position: 'absolute',
    flex: 1,
    marginTop: -60,
    paddingLeft: 20,
  },
  tickIconActive: Light_Green => ({
    height: 23,
    width: 23,
    tintColor: Light_Green,
  }),
  tickIconInactive: {
    height: 23,
    width: 23,
  },
});
