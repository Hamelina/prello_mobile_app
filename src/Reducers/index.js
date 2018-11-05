import {combineReducers} from 'redux'; 
import cards from './cards_reducer'; 
import initcard from '../Actions/actionCard'
import filter from './filter_reducer';

export default combineReducers({
    cards, 
    filter
})