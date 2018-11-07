import React from 'react';
import {withNavigation} from 'react-navigation'; 
import { Text, View, Button } from 'react-native';
import LabelsFilterComponent from '../Components/FilterComponents/LabelsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class LabelsFilterScreen extends React.Component {
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
    