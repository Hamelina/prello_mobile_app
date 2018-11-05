import React , {Component} from 'react';
import {FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';
import listsFakeData from "../../Data/lists.json" ; 
import { List, ListItem  } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import {addListToFilter , removeListFromFilter} from '../../Actions/FilterAction'

class ListsFilterComponent extends Component{
    
    constructor(props) {
        super(props);
        
        this.state = {
            checked: false,
            checkedItems: new Map()
        }
    }
    _keyExtractor = (item, index) => item.id;
    
    handleChange = (idList, isIn) => {
        console.log("in handlechange");
        if( ! isIn){
            this.props.addListToFilter( idList);
        }
        else{
            this.props.removeListFromFilter(idList);

        }
    }

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