import React , {Component} from 'react';
import {FlatList} from 'react-native';
import { connect} from 'react-redux';
import { withNavigation } from 'react-navigation';
import listsFakeData from "../../Data/lists.json" ; 
import { CheckBox , View, Icon } from 'react-native-elements';
import styles from '../../Styles/Filter&SearchStyle'; 
import CustomCheckBoxComponent from './CustomCheckboxComponent';

import {addListToFilter , removeListFromFilter} from '../../Actions/FilterAction'

class CustomColapsableCheckBoxComponent extends Component{
    
    unwrapSub = (idboard, isIn) => {
        if( checked){
            console.log(inunwrapsub);
           return <Icon style={styles.inputrap} name='redo'/>

        }
        else{
            this.props.removeBoardFromFilter(idboard);
            
        }
    }

    render(){
        const {id} = this.props ;
        const {title} = this.props ;
        const {handleChange} = this.props ;
        const {checked} = this.props ;
        
        


        return (
            <React.Fragment>
            <CheckBox
            style={styles.inputrap} 
            key={id}
            title={title}
            iconRight
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='add'
            checkedColor='red'
            checked={checked}
            onPress={() => {
                handleChange()                
            }}
            />
           {this.unwrapSub}
        </React.Fragment>
        
        
        )
    }
    
}

const mapStateToProps = (state, props) => ({
    id : props.id,
    title : props.title,
    checked : props.checked
    
})

const mapDispatchToProps = (dispatch, props) => ({
})

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(CustomColapsableCheckBoxComponent)); 
// }