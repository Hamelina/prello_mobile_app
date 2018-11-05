import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { SearchBar } from 'react-native-elements';
import styles from '../Styles/Filter&SearchStyle'

class CardSearchBar extends Component{
  
  // constructor(props) {
  //   super(props);
  //   this.state ={
  //     searchTerm : ''
  //   }; 
  // }
  render(){
    return (
      
      <SearchBar style ={styles.searchBar}
      lightTheme = {true}
      //onChangeText={someMethod}
      //onClearText={someMethod}
      icon={{ type: 'font-awesome', name: 'search' }}
      placeholder='Type Here...' />
      )
      
    }
  }
  
  const mapStateToProps = (state, props) => ({
    //searchTerm: state.sardSearchBar.searchTerm,
    
    // TODO: Add store state to the component props
  })
  
  const mapDispatchToProps = (dispatch, props) => ({
    //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
    // TODO: Add 
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardSearchBar); 
