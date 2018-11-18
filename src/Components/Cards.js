
import React , {Component} from 'react';
import { connect } from 'react-redux'; 
import { View , Text ,Platform,StyleSheet,Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { CardViewWithIcon } from "react-native-simple-card-view";
import styles from "../Styles/CarousselStyle"; 
import { Divider , Card, CheckBox} from 'react-native-elements';
import client from '../Request/client'; 

import {fetchCardsWithFilter} from '../Request/cards'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

//import {SCREEN_HEIGHT , SCREEN_WIDTH} from "../constants"


class Cards extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            //filter : this.props.navigation.getParam('filter', [])
            cardsFiltered : []
        }
        
    }
    //this.setState({cardsFiltered: cards})
    componentDidMount() {
        // this.setState({ mountedMatch: this.props.match })
        // let fil = this.props.filter
        // fetchCardsWithFilter(fil.dateFilter , fil.boardsFilter, fil.listsFilter, fil.labelsFilter)
        // .then(cards => console.log("--------success") )
        // .catch(error => console.error("------------erruer fetching cards filtered", error))
      }

    _renderItem ({item, index}) {
        
        console.log("item " , item)
        return (
            <View style={styles.carousselItem}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <CheckBox style = {{flex : 1 , flexDirection: 'row', alignContent: 'flex-end', }}
            size={10}
            checkedColor={'#7363DD'}
            title='Done'
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={(item.done=== "done")}
            containerStyle={{backgroundColor:'transparent', borderWidth: 0, padding:0}}
            onPress={() => this.setState({checked: !this.state.checked})}
            />
            </View>
            <Text style = {styles.cardTitle} >{ item.name }</Text>
            
            {/* <View styles = {{flexDirection : 'row'}}> */}
            <View >
            <Text style = {styles.propreties} >Board : { item.idBoard }    List : { item.idList }</Text>
            </View>
            {/* </View> */}
            
            
                    
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
            
            // console.log("props " , this.props);
            // console.log("state " , this.state);

            
            return(
                <Carousel 
                //style= {styles.carousselItem}
                ref={(c) => { this._carousel = c; }}
                data={this.props.cards}
                renderItem={this._renderItem}
                sliderWidth={screenwidth}
                itemWidth={screenwidth*0.75}
                />
                )
                
            } 
            
        }
        const mapStateToProps = (state, props) => console.log(props)||({
            cards: state.cards,
            cardsfiltered : props.cardsfiltered, 
            filter : props.filter || [[], [], [], null ], 
            filterscreen : state.filter, 
            listsFilter : state.filter.listsFilter,
            checked : false
            
        })
        
        const mapDispatchToProps = (dispatch, props) => ({
            dispatchSetCard : (card) => dispatch(setCard(card)),
            changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value)),
            filterCardsWithFilters: (event) => dispatch(filterCardsWithFilters(props.cardsfiltered, event.target))
        })
        
        export default connect(mapStateToProps, mapDispatchToProps)(Cards); 