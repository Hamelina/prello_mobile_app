
import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { View , Text ,Platform,StyleSheet,Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CardViewWithIcon } from "react-native-simple-card-view";
//import {SCREEN_HEIGHT , SCREEN_WIDTH} from "../constants"


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
    },
    {
        "id": 3,
        "name": "Card 3",
        "idBoard": "1",
        "idList": "2",
        "dueDate": "Date",
        "done": "doing" ,
        "desc": "Desc Card 3 fit motha"
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
    
    _renderItem ({item, index}) {
        const styles = StyleSheet.create({container: {alignItems: 'center',backgroundColor: '#F5FCFF',},});

        return (
            <View style={styles.container}>
                <Text >{ item.id }</Text>
                <Text >{ item.desc }</Text>
            </View>
        );
    }
    
    render() {
        const miniCardStyle = {shadowColor: '#000000',shadowOffsetWidth : 2,shadowOffsetHeight: 2,shadowOpacity: 0.1,hadowRadius: 5,bgColor: '#ffffff',
        padding: 5,margin: 5,borderRadius: 3,elevation: 3, width : (Dimensions.get("window").width / 2) - 10};
        
        const styles = StyleSheet.create({container: {alignItems: 'center',backgroundColor: '#F5FCFF',paddingTop     : 25,},});
        const screenwidth = Dimensions.get("window").width ;
        const screenheight = Dimensions.get("window").height ;

    
            return(
                <Carousel style = {miniCardStyle}
                ref={(c) => { this._carousel = c; }}
                data={json}
                renderItem={this._renderItem}
                sliderWidth={400}
                itemWidth={screenwidth*0.75}
                itemHeight= {1200}
                />
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