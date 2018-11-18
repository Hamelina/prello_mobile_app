import React from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'; 
import {createStackNavigator} from 'react-navigation' ;
import store from './src/Store'; 
import MainScreen from './src/Screens/MainScreen'; 
import FilterScreen from './src/Screens/FilterScreen';
import BoardsFilterScreen from './src/Screens/BoardsFilterScreen';
import ListsFilterScreen from './src/Screens/ListsFilterScreen';
import LabelsFilterScreen from './src/Screens/LabelsFilterScreen';
import Login from './src/Components/Login/Login'; 
import Application from './src/Components/ApplicationComponent'; 



const RootStack = createStackNavigator(
  {
    Application : {screen : Application}, 
    Main : {screen : MainScreen},
    Filter : {screen : FilterScreen},
    BoardsFilter: {screen : BoardsFilterScreen},
    ListsFilter: {screen : ListsFilterScreen},
    LabelsFilter: {screen : LabelsFilterScreen},
    Login: {screen : Login},
  },
  {
    initialRouteName: 'Login',
  }
  );
  export default class App extends React.Component {
    render() {
      return (
        <Provider store = {store}>
        <RootStack />
        </Provider>
        );
      }
    }
    
    AppRegistry.registerComponent('App', () => App);  
  