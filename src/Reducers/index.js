import {combineReducers} from 'redux'; 
import card from './card_reducer'
import card_data_reducer from './card_data_reducer'

export default combineReducers({
    card, 
    card_data_reducer
})