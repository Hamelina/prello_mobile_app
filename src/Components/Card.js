// // Modules
// import React from 'react';
// import { connect } from 'react-redux';
// import {store} from '../Store';


// // Action builder
// import { setCheckCardState, changeCardDesc} from '../Actions/actionCard';
// import { View , Text } from 'react-native';
// import BootstrapStyleSheet from 'react-native-bootstrap-styles';

// // import { Card, CardTitle} from 'react-native-elements'
// import {card_data_reducer} from '../Reducers'; 


// //import{Card , CardBody, CardTitle, CardText} from 'native-base';



// // Style
// //import '../../style/card.css';

// //const cards = this.props.card; 
// //const cardsList = cards.map(card => (card.id, card.desc))
// let json = [
//     {
//         "id": 0,
//         "name": "Card 0",
//         "idBoard": "1",
//         "idList": "2",
//         "dueDate": "Date",
//         "done": "doing" ,
//         "desc": "Desc Card 0"
//     },
//     {
//         "id": 1,
//         "name": "Card 1",
//         "idBoard": "1",
//         "idList": "2",
//         "dueDate": "Date",
//         "done": "doing" ,
//         "desc": "Desc Card 1"
//     },
//     {
//         "id": 2,
//         "name": "Card 2",
//         "idBoard": "1",
//         "idList": "2",
//         "dueDate": "Date",
//         "done": "doing" ,
//         "desc": "Desc Card 2"
//     }
// ]

// const
//   BODY_COLOR = '#000022',
//   TEXT_MUTED = '#888888';

// // custom constants
// const constants = {
//   BODY_COLOR, TEXT_MUTED,
// };

// // custom classes
// const classes = {
//   title: {
//     color: 'red',
//   }
// };



// const bootstrapStyleSheet = new BootstrapStyleSheet(constants, classes);
// const s = styles = bootstrapStyleSheet.create();
// const c = constants = bootstrapStyleSheet.constants;

// const myCard = ({
//     id,
//     desc,
//     state,
//     setCheckCardState, 
//     changeCardDesc
    
// }) => (
    
    
//     json.map((cardDetail , index)=>{
//         return (
//             <View key = {index}>
            
//             <Text style={{ fontFamily: 'Arial', fontSize: 56 }}>
//             {cardDetail.name} 
//             </Text> 
            
//             <View style={[s.card]}>
//             <View style={[s.cardBody]}>
            
//             <Text style={[s.text]}>{cardDetail.desc}</Text>
//             </View>
//             </View>
            
            
            
//             </View>
            
//             )
//         })
        
        
//         )
        
//         const mapStateToProps = (state, props) => ({
//             desc: state.card.desc,
//             state: state.card.state
//             // TODO: Add store state to the component props
//         })
        
//         const mapDispatchToProps = (dispatch, props) => ({
//             //setCheckCardState: (complete) => dispatch(setCheckCardState( props.id, complete ))
//             changeCardDesc: (event) => dispatch(changeCardDesc(props.id, event.target.value))
//             // TODO: Add 
//         })
        
//         export default connect(mapStateToProps, mapDispatchToProps)(myCard); 