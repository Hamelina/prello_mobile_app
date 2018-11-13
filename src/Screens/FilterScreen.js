import React, {Component} from 'react'; 
import { List, ListItem, Text , Button, Icon} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { connect} from 'react-redux';
import styles from '../Styles/Filter&SearchStyle'; 
import DateComponent from '../Components/DateComponent';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {addDateToFilter , removeDatesFromFilter} from '../Actions/FilterAction'



class FilterScreen extends Component {
    
    state = {
        isDateTimePickerVisible: false,
    };
    
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
    
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.props.removeDatesFromFilter()
        this.props.addDateToFilter(date); 
        this._hideDateTimePicker();
    };
    
    onPress = (key) =>{
        const { navigate } = this.props.navigation;
        console.log("pressed,,,"+ this.props.state );
        
        
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
                        
                        this._showDateTimePicker();
                        
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
                            <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                            />
                            </React.Fragment>
                            )}
                        }       
                        const mapStateToProps = (state, props) => console.log("filterScreen",state) || ({
                            
                            listsFilter : state.filter.listsFilter, 
                            dateFilter : state.filter.listsFilter.dateFilter
                        })
                        
                        const mapDispatchToProps = (dispatch, props) => ({
                            addDateToFilter: (idDate) => dispatch(addDateToFilter(idDate)),
                            removeDatesFromFilter: () => dispatch(removeDatesFromFilter())
                            
                        })
                        
                        export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen); 