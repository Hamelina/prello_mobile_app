import {combineReducers} from 'redux'; 
import cards from './cards_reducer'; 
import initcard from '../Actions/actionCard'
import filter from './filter_reducer';
import auth from './auth_reducer'; 
import boards from './board_reducer'; 

export default combineReducers({
    auth, 
    cards, 
    filter, 
    boards
})