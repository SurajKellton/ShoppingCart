import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {observer, inject} from 'mobx-react';
import {action, makeObservable, observable} from 'mobx';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Url from '../../utils/appConstants/ImageUrl';
import AppConstants from '../../utils/appConstants/AppConstants';
import CustomHeader from '../../utils/component/CustomHeader';
import globalStyles from '../../utils/appConstants/Styles';

@inject('ProductListStore')
@observer
class SavedAdress extends Component {
  @observable updatedAddressList = [];
  @action updatingAddressList = (value) =>{
    this.updatedAddressList = value
  }
  constructor() {
    super();
    makeObservable(this);
  }

  componentDidMount(){
    const {ProductListStore} = this.props;
    if (ProductListStore.address?.length !== 0) {
      let modifiedAddressList = ProductListStore.address?.map(item => {
        item.isSelected = true;
        return {...item};
      });
      this.updatingAddressList(modifiedAddressList);
    }
  }

  renderHeader = () => {
    const {back} = Url.imageUrl;
    const {CART} = AppConstants;
    const {ADDRESS} = AppConstants.SCREENTITLE;
    const {navigation} = this.props;
    return (
      <CustomHeader
        leftIcon={back}
        screenTitle={ADDRESS}
        onHeaderLeftButtonPress={() => navigation.goBack()}
        onHeaderRightButtonPress={() => navigation.navigate(CART)}
        onWishlistButtonPress={() => navigation.navigate(WISHLIST)}
      />
    );
  };

  renderSavedAddress = () => {
    const {ADD_NEW} = AppConstants.BUTTONTITLE;
    const {ADDRESS} = AppConstants;
    const {gray, Cancel_Btn} = globalStyles.colorCodes;
    return (
      <View style={styles.savedLocationView}>
        <TouchableOpacity
          style={styles.bottomBtn(Cancel_Btn)}
          onPress={() => this.props.navigation.navigate(ADDRESS)}>
          <Text style={styles.bottomButtonText(gray)}>{ADD_NEW}</Text>
        </TouchableOpacity>
        {this.renderList()}
      </View>
    );
  };

  renderList = () => {
    console.log(this.updatedAddressList)
    return (
      <View style={styles.addressListView}>
        <FlatList
          data={this.updatedAddressList}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  onPressTick = (item) =>{
    console.log(item.isSelected)
    let id = item.id;
    const {ProductListStore} = this.props;
    if (ProductListStore.address?.length !== 0) {
      let modifiedAddressList = ProductListStore.address?.map(item => {
        if(item.id === id){
        item.isSelected = !item.isSelected;
        }else{
          item.isSelected = true;
        }
        return {...item};
      });
      this.updatingAddressList(modifiedAddressList);
    }
  }

  renderItem = item => {
    const {okIcon, mobile, greeenTick} = Url.imageUrl;
    return (
      <View>
        <View style={styles.nameView}>
          <TouchableOpacity onPress={() => this.onPressTick(item)}>
            <Image
              style={styles.tickIcon}
              source={item.isSelected ? okIcon : greeenTick}></Image>
          </TouchableOpacity>
          <Text style={styles.name}> {item.userName} </Text>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={styles.mobileView}>
          <Image style={styles.tickIcon} source={mobile}></Image>
          <Text style={styles.mobile}> {item.mobile} </Text>
        </View>
      </View>
    );
  };

  renderBottom = () => {
    const {white, orange} = globalStyles.colorCodes;
    const {CONTINUE} = AppConstants.BUTTONTITLE;
    return (
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomBtn(orange)}>
          <Text style={styles.bottomButtonText(white)}>{CONTINUE}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderForm = () => {
    const {SAVED_LOCATION} = AppConstants.CONSTANTHEADINGS;
    return (
      <View style={styles.addressContainer}>
        <Text style={styles.titleText}>{SAVED_LOCATION}</Text>
        {this.renderSavedAddress()}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        {this.renderForm()}
        {this.renderBottom()}
      </SafeAreaView>
    );
  }
}
export default SavedAdress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colorCodes.Address_Screen_BG,
  },
  addressContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: globalStyles.colorCodes.Address_Screen_BG,
  },
  addressListView: {
    flex: 1,
    backgroundColor: globalStyles.colorCodes.Address_Screen_BG,
  },
  titleText: {
    fontWeight: 'bold',
    color: globalStyles.colorCodes.TextColor,
    fontSize: 16,
    paddingVertical: 10,
  },
  bottomView: {
    flex: 0.10,
    alignSelf: 'center',
    width: '90%',
    //backgroundColor: 'red',
    justifyContent: 'flex-end'
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
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ButtonBackgroundColor,
  }),
  savedLocationView: {
    flex: 1,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: globalStyles.colorCodes.TextColor,
  },
  mobile: {
    fontSize: 16,
    color: globalStyles.colorCodes.TextColor,
  },
  mobileView: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: globalStyles.colorCodes.TextColor,
    borderBottomWidth: 1,
  },
  addressView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tickIcon: {
    height: 18,
    width: 18,
  },
  address: {
    fontSize: 16,
  },
});
