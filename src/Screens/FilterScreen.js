import React, {Component} from 'react'; 
import { List, ListItem, Text , Button, Icon} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { connect} from 'react-redux';
import styles from '../Styles/Filter&SearchStyle'; 
import DateComponent from '../Components/DateComponent';
import { View } from 'native-base';


class FilterScreen extends Component {
    
    onPress = (key) =>{
        const { navigate } = this.props.navigation;
        console.log("filterScreen props " , this.props );
        console.log("filterScreen state " , this.state );

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
            console.log("filterScreen" , this.props );
            console.log("filterScreen state" , this.state );

            const filterBy = [
                {key : 1 , name : 'Due Day'}, 
                {key : 2 ,name : 'Board' }, 
                {key : 3 ,name : 'List'}, 
                {key : 4 ,name : 'Tag'},
            ]
            const { navigate } = this.props.navigation;
            return(
                <React.Fragment>
                <DateComponent style={styles.dateComponent}/>
                <Text style={styles.title}> Filter By</Text>
                <List containerStyle={styles.filterScreen }>
                {
                    filterBy.map((l) => (
                        <ListItem 
                        hideChevron
                        key={l.key}
                        title={l.name}
                        onPress={() => this.onPress(l.key)}
                        
                        />
                        ))
                    }
                </List>
                <Button
                style ={styles.nextButton}
                icon={
                    <Icon
                    name='arrow-right'
                    size={15}
                    color='white'
                    />
                }
                title='Done'
                onPress={() =>
                    
                    navigate('Main', {
                        filter : this.props.filter ,
                    })
                }            />
                
                </React.Fragment>
                    )}
                }       
                const mapStateToProps = (state, props) => console.log("filterScreen",state) || ({
                    listsFilter : state.filter.listsFilter
                })
                
                export default connect(mapStateToProps)(FilterScreen); 