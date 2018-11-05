
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    row: {
        width : Dimensions.get("screen").width,
        //flexDirection: "row", 
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
    }, 
    filterScreen : {
        marginTop: Dimensions.get("screen").height*0.1, 
    },
    searchbar :{
        minWidth : Dimensions.get("screen").width/2, 
    }, 
    Title : {
        fontSize: 40 ,
        paddingVertical: 20,
        fontWeight: 'bold',
        textAlign : "left", 
        color : '#1D8ECE'

    }, 
    dateComponent :{
        flex : 1, 
        alignSelf: 'flex-end', 


    }
    
});