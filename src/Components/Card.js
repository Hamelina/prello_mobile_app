// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';
import { StyleSheet, Text, View , Button, ButtonGroup} from 'react-native';
import{Card , CardBody, CardTitle, Button, CardText} from 'native-base';



// Style
import '../../style/card.css';

const cards = this.props.cards; 
const cardsList = cards.map(card => (card.id, card.desc))

const Card = ({
    id,
    desc,
    state,
    setCheckCardState, 
    changeCardDesc
    // TODO: Put destructured props
    // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
    // <Button className="mycard">
    //     <Text>{id}</Text>
    // </Button>
    <View>  
        <Text> cards </Text>
        <Text> {id} </Text>

        <ButtonGroup
            buttons= {cardsList}
        
        />
    
    </View>
        
    );
    
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(Card); 