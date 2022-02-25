import React, { Component } from "react";
import {StyleSheet} from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "mobx-react";
import Stores from "../../stores/Stores";
import SideBarStack from "./SideBarStack";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider {...Stores}>
        <SafeAreaProvider style={styles.SafeAreaProviderView}>
          <SideBarStack />
        </SafeAreaProvider>
      </Provider>
    );
  };
}
export default App;
const styles = StyleSheet.create({
  SafeAreaProviderView:{
     flex: 1 
  }
});

