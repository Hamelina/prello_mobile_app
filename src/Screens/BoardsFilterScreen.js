import React from 'react';
import {withNavigation} from 'react-navigation'; 
import { StyleSheet, Text, View, Button, Icon } from 'react-native';
import BoardsFilterComponent from '../Components/FilterComponents/BoardsFilterComponent';
import styles from '../Styles/Filter&SearchStyle'


class BoardsFilterScreen extends React.Component {

    render() {
        const { navigate } = this.props.navigation
        console.log("BoardfilterScreen props" , this.props );
        console.log("BoardfilterScreen state" , this.state );

        return (
            <View>
            <Text style ={styles.title}>Filter By Boards</Text>
            <BoardsFilterComponent/>

            <Button
            style ={styles.nextButton}
                
                title='Next'
                onPress={() =>
                    navigate('Filter',{
                        filter : this.props.filter ,
                    })
                }            />

            
            </View>
            );
        }
    }
    export default withNavigation(BoardsFilterScreen);
    