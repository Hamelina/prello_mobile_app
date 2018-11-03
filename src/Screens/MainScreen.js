import React, { Component } from 'react';
import { View, Platform, Image , Text} from 'react-native';
import Cards from '../Components/Cards'
import  FilterButton  from '../Components/FilterButton';
import CardSearchBar from '../Components/CardSearchBar';

//Style
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../Styles/Filter&SearchStyle'

// const cacheImages = images => images.map(image => {
//   if (typeof image === 'string') return Image.prefetch(image);
//   return Expo.Asset.fromModule(image).downloadAsync();
// });

class MainScreen extends Component {
  static navigationOptions = () => ({
    title: 'Prello',
    headerStyle: {
      height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
      backgroundColor: '#2196F3'
    },
    headerTitleStyle: {
      marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      color: 'white'
    },
    headerLeft: <Text> </Text>
    
    
  });
  
  state = {
    appIsReady: false
  }
  
  //   componentWillMount() {
  //     this._loadAssetsAsync();
  //   }
  
  //   async _loadAssetsAsync() {
  //     const imageAssets = cacheImages([icon]);
  //     await Promise.all([...imageAssets]);
  //     this.setState({ appIsReady: true });
  //   }
  
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor: '#ddd' }} id='mainView'>
      
      <View style={styles.row}>
        <FilterButton style = {styles.buttonWrap}/>
        <CardSearchBar style= {styles.inputWrap}/>
      </View>

      <Cards/>
      </View>
      );
    }
  }
  
  
  export default MainScreen;