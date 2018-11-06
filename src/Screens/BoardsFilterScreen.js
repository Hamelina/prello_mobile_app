import React from 'react';
import {withNavigation} from 'react-navigation'; 
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import BoardsFilterComponent from '../Components/FilterComponents/BoardsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class BoardsFilterScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation

        return (
            <View>
            <Text style ={styles.title}>Filter By Boards</Text>
            <BoardsFilterComponent/>

            <Button
            style ={styles.nextButton}
                icon={
                    <Icon
                    name='arrow-right'
                    size={15}
                    color='white'
                    />
                }
                title='Next'
                onPress={() =>
                    navigate('Filter')
                }            />

            
            </View>
            );
        }
    }
    export default withNavigation(BoardsFilterScreen);
    