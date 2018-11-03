import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'; 
import {createStackNavigator} from 'react-navigation' ;
import store from './src/Store'; 
import MainScreen from './src/Screens/MainScreen'; 
import FilterScreen from './src/Screens/FilterScreen';

const util = require('util');

export default class App extends React.Component {
  render() {
    const MainNavigator = createStackNavigator ({
      Main : {screen : MainScreen},
      Filter : {screen : FilterScreen},
    });

    //console.log("this props nav = " +util.inspect(this.props.navigation, false, null)); 

    return (
    
  
      <Provider store = {store}>  
        <MainNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
