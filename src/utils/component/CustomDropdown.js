import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CustomDropDown = () => {
  return (
    <View>
      <Picker
        style={[styles.btnTabs, styles.btnTabActivity]}
        mode="dropdown"
        selectedValue={this.value}
        onValueChange={this.updateValue()}>
        {this.list.map((item, index) => {
          return (
            <Picker.Item
              label={item}
              value={index}
              key={index}
              style={(styles.textTabs, styles.textTabActive)}
            />
          );
        })}
      </Picker>
    </View>
  );
};
export default CustomDropDown;

const styles = StyleSheet.create({
  btnTabs: {
    marginTop: 0,
    //width: "90%",
    //width: Dimensions.get('window').width / 1.75,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 17,
    //height: 50,
    justifyContent: 'center',
  },
  textTabs: {
    fontSize: 16,
  },
  btnTabActivity: {
    backgroundColor: 'darkcyan',
  },
  textTabActive: {
    color: 'black',
  },
});
