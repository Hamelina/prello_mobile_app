import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoardsFilterComponent from '../Components/FilterComponents/BoardsFilterComponent';


class BoardsFilterScreen extends React.Component {
    render() {
        return (
            <View>
            <Text>Boards</Text>
            <BoardsFilterComponent/>
            </View>
            );
        }
    }
    export default BoardsFilterScreen;    
    