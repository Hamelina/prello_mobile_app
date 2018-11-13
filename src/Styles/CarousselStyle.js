import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    carousselItem: {alignItems: 'center',
                backgroundColor: '#F5FCFF',
                height: Dimensions.get("screen").height/2 ,
                marginTop: Dimensions.get("screen").height *0.08  ,
                borderRadius : 20,
                shadowRadius : 20,
                shadowOpacity : 12, 
                //shadowColor : '#000000', 
               
            },
    
    caroussel : {
        backgroundColor : 'red',
    },
    cardTitle : {
        fontSize: 40 ,
        paddingVertical: 10,
        fontWeight: 'bold',
        textAlign : "center", 
        color : '#1D8ECE'

    }, 
    cardDesc: {
        fontSize: 30 ,
        paddingVertical: 20,
        textAlign : "center", 

    }, 
    propreties : {
        fontSize : 15, 
        textAlign : 'left', 
        alignSelf: 'flex-start', 
        paddingHorizontal : 10, 
    },
    cardForDesc : {
        height : Dimensions.get("screen").height/2.5 ,

    }, 
    checkbox : {
        alignSelf : "flex-end"
    },
    cardCheckView : {
        flex : 1, 
        flexDirection : 'column'
    }

    });
