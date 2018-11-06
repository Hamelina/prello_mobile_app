
import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { View , Text ,Platform,StyleSheet,Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CardViewWithIcon } from "react-native-simple-card-view";
import styles from "../Styles/CarousselStyle"; 
import { Divider , Card} from 'react-native-elements';
//import {SCREEN_HEIGHT , SCREEN_WIDTH} from "../constants"


class Cards extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            loading: true, 
            searchTerm : '' };
            
        }
        
        async componentWillMount() {
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            });
        }
        
        _renderItem ({item, index}) {


            return (
                <View style={styles.carousselItem}>
                {/* <CheckBox/> */}
                <Text style = {styles.cardTitle} >{ item.name }</Text>
                <Text style = {styles.propreties} >Board : { item.idBoard }</Text>
                <Text style = {styles.propreties}>List : { item.idList }</Text>
                <Divider style={{ backgroundColor: '#000000' }} />
                <ScrollView contentContainerStyle={styles.contentContainer}>
                <Card style = {styles.cardForDesc}title="Description">
                <Text style = {styles.cardDesc}> {item.desc}</Text>
                </Card>
                </ScrollView>
                
                </View>
                );
            }
            
            render() {
                
                
                const screenwidth = Dimensions.get("window").width ;
             
                
                return(
                    <Carousel 
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.cardsfiltered}
                    renderItem={this._renderItem}
                    sliderWidth={screenwidth}
                    itemWidth={screenwidth*0.75}
                    />
                    )
                    
                } 
                
            }
            const mapStateToProps = (state, props) => ({
                cards: state.cards,
                name: state.cards.name,
                state: state.cards.state,
                cardsfiltered : props.cardsfiltered
                // TODO: Add store state to the component props
            })
            
            const mapDispatchToProps = (dispatch, props) => ({
                //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
                changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
                // TODO: Add 
            })
            
            export default connect(mapStateToProps, mapDispatchToProps)(Cards); 