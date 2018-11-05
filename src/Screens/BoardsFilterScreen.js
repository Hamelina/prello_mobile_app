import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoardsFilterComponent from '../Components/FilterComponents/BoardsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class BoardsFilterScreen extends React.Component {
    render() {
        return (
            <View>
            <Text style ={styles.Title}>Filter By Boards</Text>
            <BoardsFilterComponent/>
            </View>
            );
        }
    }
    export default BoardsFilterScreen;    
    