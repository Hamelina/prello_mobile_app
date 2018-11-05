import React , {Component} from 'react';
import {FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';
import listsFakeData from "../../Data/lists.json" ; 
import { List, ListItem  } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 

class ListsFilterComponent extends Component{
    
    constructor(props) {
        super(props);
    }
    _keyExtractor = (item, index) => item.id;
    
    render(){
        const { navigate } = this.props.navigation;
        
        return (
            <List containerStyle={styles.filterScreen }>
            <FlatList
            data = {listsFakeData}
            keyExtractor={this._keyExtractor}
            renderItem={({ item : l }) => (
                <ListItem 
                key={l.id}
                title={l.name}
                onPress={() => this.onPress(l.key)}
                
                />
                )}
                />
                </List>
                )
                
            }
        }
        export default withNavigation(ListsFilterComponent); 