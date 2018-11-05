import React, {Component} from 'react' ; 
import {View, Text} from 'react-native'

export default class DateComponent extends Component{
    render(){
        var day = new Date().getDay()
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        return(
            <View>
                <Text>Today's date is : {date} / {month} / {year}</Text>
            </View>
        )
    }
}