import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Animated} from 'react-native';
import {inject, observer} from 'mobx-react';
import {observable} from 'mobx';
import globalStyles from '../appConstants/Styles';

@inject('ProductListStore')
@observer
class CustomTextInput extends Component {
  @observable position = new Animated.Value(
    this.props.ProductListStore.textFieldText ? 1 : 0,
  );

  onFocus = () => {
    const {ProductListStore} = this.props;
    if (
      ProductListStore.isFocused === false &&
      !ProductListStore.textFieldText
    ) {
      ProductListStore.updatingFocused();
      Animated.timing(this.position, {
        toValue: 1,
        duration: 500,
      }).start();
    }
  };

  onBlur = () => {
    const {ProductListStore} = this.props;
    if (ProductListStore.isFocused && !ProductListStore.textFieldText) {
      ProductListStore.updatingFocused();
      Animated.timing(this.position, {
        toValue: 0,
        duration: 500,
      }).start();
    }
    ProductListStore.updatingTextFieldText('');
    //!ProductListStore.textFieldText == '' ? ProductListStore.updatingTextFieldText('') : console.log("sds")
  };

  //  onChangeText = (text) =>{
  //    this.props.ProductListStore.updatingTextFieldText(text);
  //  }

  returnAnimatedTitleStyles = () => {
    const {ProductListStore} = this.props;
    // const{TextColor, gray}=globalStyles.colorCodes;
    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [23, 0],
      }),
    };
  };

  renderTitle = (id, text) => {
    const {ProductListStore} = this.props;
    // if(id == ProductListStore.idForTextField){
    return (
      // <Animated.View style={id == ProductListStore.idForTextField? styles.titleView : styles.titleViewAnimated}>
      <Animated.Text
        style={
          id == ProductListStore.idForTextField
            ? [styles.titleView, this.returnAnimatedTitleStyles()]
            : styles.titleViewAnimated
        }>
        {text}
      </Animated.Text>
      // </Animated.View>
    );
    //}
  };

  render() {
    const {
      placeholder,
      id,
      onChangeText = () => {},
      onFocus = () => {},
      onBlur = () => {},
      onPressIn = () => {},
      keyboardType,
      ProductListStore,
    } = this.props;
    return (
      // <View>
      <View>
        <TextInput
          //placeholder = {id==ProductListStore.idForTextField? '': placeholder}
          style={styles.textFields}
          onChangeText={(text) => onChangeText(text)}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          multiline={true}
          keyboardType={keyboardType}
        />
        <Animated.Text style={[styles.title, this.returnAnimatedTitleStyles()]}>
          {placeholder}
        </Animated.Text>
      </View>
      // </View>
    );
  }
}
export default CustomTextInput;

const styles = StyleSheet.create({
  textFields: {
    fontSize: 15,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginTop: 10,
    backgroundColor: globalStyles.colorCodes.ligt_gray,
  },
  title: {
    position: 'absolute',
    color: 'black',
    backgroundColor: globalStyles.colorCodes.white,
    left: 20,
  },
  titleView: {
    position: 'absolute',
    flex: 1,
    left: 20,
    backgroundColor: globalStyles.colorCodes.white,
  },
  titleViewAnimated: {
    position: 'absolute',
    flex: 1,
    paddingLeft: 20,
    top: 25,
  },
});
