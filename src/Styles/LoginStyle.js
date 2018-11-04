import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container : {
        flex : 1 , 
        backgroundColor : "#1D8ECE"
    }, 
    logoContainer: {
        alignItems : 'center', 
        flexGrow : 1 , 
        justifyContent : 'center'
    }, 
    logo: {
        // width : 100, 
        // height: 80
    },
    googleText : {
        textAlign : 'center', 
        color : '#CDCDCD', 
        fontWeight : '600',
        paddingVertical: 20

    }, 
    signup : {
        textAlign : 'right',
        color : '#CDCDCD', 
        fontWeight : '600',
        paddingVertical: 5
    }

    });
