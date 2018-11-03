
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    row: {
        width : Dimensions.get("screen").width,
        flexDirection: "row", 
    }, 
    inputWrap: {
        flex: 3,
        borderColor: "#cccccc",
        borderBottomWidth: 1,
        marginBottom: 10, 
        minWidth : Dimensions.get("window").width*0.5
    },
    buttonWrap : {
        flex : 1,
    }
    
});