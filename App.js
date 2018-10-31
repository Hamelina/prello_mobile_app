import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'; 
import {createStackNavigator} from 'react-navigation' ;
import store from './src/Store'; 
import MainScreen from './src/Screens/MainScreen'
//import Card from './src/Components/Card';

export default class App extends React.Component {
  render() {
    const MainNavigator = createStackNavigator ({
      Main : {screen : MainScreen}
    });


    return (
      // <View style={styles.container}>
      // <Text> hello World </Text>
      // </View>

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
