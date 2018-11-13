import React from 'react';
import {withNavigation} from 'react-navigation'; 
import { Text, View, Platform, Button } from 'react-native';
import LabelsFilterComponent from '../Components/FilterComponents/LabelsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class LabelsFilterScreen extends React.Component {
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
    
    render() {
        return (
            <View>
            <Text style ={styles.title}>Filter ByLabels</Text>
            <LabelsFilterComponent/>
            <Button
            style ={styles.nextButton}
            
            title='Next'
            onPress={() =>
                this.props.navigation.navigate('Filter',{
                    filter : this.props.filter ,
                })
            }            />
            </View>
            );
        }
    }
    export default LabelsFilterScreen;    
    