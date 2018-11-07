import React from 'react';
import {withNavigation} from 'react-navigation'; 
import { Text, View, Button } from 'react-native';
import ListsFilterComponent from '../Components/FilterComponents/ListsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class ListsFilterScreen extends React.Component {
    render() {
        return (
            <View>
            <Text style ={styles.title}>Filter By Lists</Text>
            <ListsFilterComponent/>
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
    export default ListsFilterScreen; 
    