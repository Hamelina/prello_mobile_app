
import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { View , Text ,Platform,StyleSheet,Dimensions} from 'react-native';

import { CardViewWithIcon } from "react-native-simple-card-view";


const
BODY_COLOR = '#000022',
TEXT_MUTED = '#888888';

// custom constants
const constants = {
    BODY_COLOR, TEXT_MUTED,
};

// custom classes
const classes = {
    title: {
        color: 'red',
    }
};

// json 
let json = [
    {
        "id": 0,
        "name": "Card 0",
        "idBoard": "1",
        "idList": "2",
        "dueDate": "Date",
        "done": "doing" ,
        "desc": "Desc Card 0 jdeijdie"
    },
    {
        "id": 1,
        "name": "Card 1",
        "idBoard": "1",
        "idList": "2",
        "dueDate": "Date",
        "done": "doing" ,
        "desc": "Desc Card 1 hi va bosser "
    },
    {
        "id": 2,
        "name": "Card 2",
        "idBoard": "1",
        "idList": "2",
        "dueDate": "Date",
        "done": "doing" ,
        "desc": "Desc Card 2 llelele"
    }
]



class Cards extends Component {
    
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }
    
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        });
    }
    
    
    render() {
        const miniCardStyle = {shadowColor: '#000000',shadowOffsetWidth : 2,shadowOffsetHeight: 2,shadowOpacity     : 0.1,hadowRadius      : 5,bgColor           : '#ffffff',padding           : 5,margin            : 5,borderRadius      : 3,elevation         : 3,width             : (Dimensions.get("window").width / 2) - 10
    };
    const styles = StyleSheet.create({container: {flex           : 2, alignItems     : 'center',backgroundColor: '#F5FCFF',paddingTop     : 25,},});
    
    const cardsView =  json.map((cardDetail , index)=>{
        return (
            <View key = {index}>
            <CardViewWithIcon
            withBackground={ false }
            // androidIcon={ 'logo-github' }
            // iosIcon={ 'logo-github' }
            iconHeight={ 0 }
            // iconColor={ '#333' }
            title={cardDetail.name}  
            contentFontSize={ 20 }
            titleFontSize={ 25 }
            style={ miniCardStyle }
            content={ cardDetail.desc }
            // onPress={ () => this.setState({
            //     github       : this.state.github + 1
            // }) }
            />
            </View>
            )
        })
        return(
            <View>
            {cardsView} 
            </View>
            )
            
        } 
        
    }
    const mapStateToProps = (state, props) => ({
        desc: state.card.desc,
        state: state.card.state
        // TODO: Add store state to the component props
    })
    
    const mapDispatchToProps = (dispatch, props) => ({
        //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
        changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
        // TODO: Add 
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(Cards); 