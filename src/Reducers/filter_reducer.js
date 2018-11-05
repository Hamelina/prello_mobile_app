import { combineReducers } from 'redux';
import {initFilter, ADD_ID_BOARD_TO_FILTER , REMOVE_ID_BOARD_FROM_FILTER} from '../Actions/FilterAction'; 


const boardsFilter = ( state = initFilter.boardsFilter, action ) => {
    switch(action["type"]) {
        case ADD_ID_BOARD_TO_FILTER:
        return [...state , action.payload.idBoard ]
        
        case REMOVE_ID_BOARD_FROM_FILTER:
        return state.filter((idBoard) =>action.payload.idBoard != idBoard)

        default:
        return state;
    }
}
export default combineReducers({
    boardsFilter
}
)