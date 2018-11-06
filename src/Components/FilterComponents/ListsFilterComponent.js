import React , {Component} from 'react';
import {FlatList} from 'react-native';
import { connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import listsFakeData from "../../Data/lists.json" ; 
import { List, ListItem  } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import CustomCheckBoxComponent from './CustomCheckboxComponent';

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
        if( ! isIn){
            this.props.addListToFilter( idList);
        }
        else{
            this.props.removeListFromFilter(idList);

        }
    }

    render(){
        const {listsFilter} = this.props ;
        return (
            
            <List style ={styles.component}>
            <FlatList
            data = {listsFakeData}
            keyExtractor={this._keyExtractor}
            extraData={listsFilter}
            renderItem={({ item : list }) => (
                <ListItem 
                
                hideChevron
                key={list.id}

                title={

                    <CustomCheckBoxComponent id={list.id} title ={list.name} 
                    handleChange={() =>this.handleChange(list.id, listsFilter.includes(list.id) )} 
                    checked ={listsFilter.includes(list.id)}
                    />
                    
                } 
                />                
                
                )}
                
                />
                </List>
                
                )
            }
            
        }

        const mapStateToProps = (state, props) => console.log(state) || ({
            listsFilter : state.filter.listsFilter
        })
        
        const mapDispatchToProps = (dispatch, props) => ({
            addListToFilter: (idList) => dispatch(addListToFilter(idList)),
            removeListFromFilter: (idList) => dispatch(removeListFromFilter(idList))

        })

        export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ListsFilterComponent)); 