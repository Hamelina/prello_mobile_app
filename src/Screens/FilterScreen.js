import React, {Component} from 'react'; 
import { List, ListItem,  } from 'react-native-elements';
import {Dimensions}from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from '../Styles/Filter&SearchStyle'; 


class FilterScreen extends Component {
    
    onPress = (key) =>{
        const { navigate } = this.props.navigation;
        console.log("key pressssed " + key); 
        switch(key){
            case 2 : 
            return (
                navigate('BoardsFilter')
                )
            case 3 : 
            return (
                navigate('ListsFilter')
            )
            case 4 : 
            return (
                navigate('LabelsFilter')
            )
            case 1 :
                <DatePicker
                style={{width: 200}}
                
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
                />
            }
        }
        
        async openAndroidDatePicker() {
            try {
                const {action, year, month, day} = await DatePickerAndroid.open({
                    date: new Date()
                });
            } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
            }
        }
        render(){
            const filterBy = [
                {key : 1 , name : 'Due Day'}, 
                {key : 2 ,name : 'Board' }, 
                {key : 3 ,name : 'List'}, 
                {key : 4 ,name : 'Tag'},
            ]
            const { navigate } = this.props.navigation;
            return(
                <List containerStyle={styles.filterScreen }>
                {
                    filterBy.map((l) => (
                        <ListItem 
                        key={l.key}
                        title={l.name}
                        onPress={() => this.onPress(l.key)}
                        
                        />
                        ))
                    }
                    </List>
                    )}
                }       
                
                export default FilterScreen; 