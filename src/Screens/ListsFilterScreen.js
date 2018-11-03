import React from 'react';
import { Text, View } from 'react-native';
import ListsFilterComponent from '../Components/FilterComponents/ListsFilterComponent';


class ListsFilterScreen extends React.Component {
    render() {
        return (
            <View>
            <Text>Lists</Text>
            <ListsFilterComponent/>
            </View>
            );
        }
    }
    export default ListsFilterScreen;    
    