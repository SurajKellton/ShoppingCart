import React, { Component } from "react";
import Routes from "./src/components/routes/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Stores from "./src/stores/Stores";
import { Provider } from "mobx-react";

class App extends Component{
 render() {
  return (
    <Provider {...Stores}>
    <SafeAreaProvider style = {{flex:1}}>
      <Routes />
    </SafeAreaProvider>
    </Provider>
  );
};
}
export default App;