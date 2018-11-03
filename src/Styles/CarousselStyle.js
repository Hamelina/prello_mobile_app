import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    carousselItem: {alignItems: 'center',
                backgroundColor: '#F5FCFF',
                height: Dimensions.get("screen").height/1.75 ,
                marginTop: Dimensions.get("screen").height *0.08  ,
                borderRadius : 20,
                shadowRadius : 20,
                shadowOpacity : 12, 
                shadowColor : '#000000'
            },
    
    caroussel : {
        backgroundColor : 'red',
    },

    });
