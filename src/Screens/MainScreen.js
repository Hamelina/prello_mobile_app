import React, { Component } from 'react';
import { View, Platform, Image , Text} from 'react-native';
import Cards from '../Components/Cards'
import  FilterButton  from '../Components/FilterButton';
import CardSearchBar from '../Components/CardSearchBar';
import SearchInput, { createFilter } from 'react-native-search-filter';
import cardsFakeData from "../Data/cards.json" ; 

//Style
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../Styles/Filter&SearchStyle'

// const cacheImages = images => images.map(image => {
//   if (typeof image === 'string') return Image.prefetch(image);
//   return Expo.Asset.fromModule(image).downloadAsync();
// });

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '', 
      appIsReady: false

    }
  }
  searchUpdated(term) {
    console.log("in search updated"), 

    this.setState({ searchTerm: term })
  }


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
    headerRight: <Text style = {styles.logout}> Logout</Text>
    
    
  });
  
  
  //   componentWillMount() {
  //     this._loadAssetsAsync();
  //   }
  
  //   async _loadAssetsAsync() {
  //     const imageAssets = cacheImages([icon]);
  //     await Promise.all([...imageAssets]);
  //     this.setState({ appIsReady: true });
  //   }
  
  render() {
    console.disableYellowBox = true;
     const KEYS_TO_FILTERS = ['item.name', 'card.desc'];
     //filter((idList) =>action.payload.idList != idList)
     console.log(this.state)
     const filteredCards = cardsFakeData.filter(
            (card)=> (card.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >=0) ||
            card.desc.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >=0)   
     filteredCards.map(l => console.log("inmap"+l.name))
     console.log("filteredcards" , filteredCards)

    return (
      console.log(this.state.searchTerm), 
      <View style={{backgroundColor: '#ddd' }} id='mainView'>
      
        <FilterButton style = {styles.buttonWrap}/>
         <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          // style={styles.searchInput}
          placeholder="Type a message to search"
          />  
        {/* <CardSearchBar style= {styles.inputWrap} /> */}
      <Cards cardsfiltered={filteredCards} />
      </View>
      );
    }
  }
  
  
  export default MainScreen;