// Modules
import React from 'react';
import { connect } from 'react-redux';

// Action builder
import { setCheckCardState, changeCardDesc} from '../../action/actionCard';
import { StyleSheet, Text, View , Button} from 'react-native';



// Style
import '../../style/card.css';


const Card = ({
    id,
    desc,
    state,
    setCheckCardState, 
    changeCardDesc
    // TODO: Put destructured props
    // <input type="checkbox" onChange={setCheckCardState( 1, true)}/>
}) => (
    <Button className="mycard">
        <Text>{id}</Text>
    </Button>
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