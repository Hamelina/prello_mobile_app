import { combineReducers } from 'redux';
import {initFilter, ADD_ID_BOARD_TO_FILTER , REMOVE_ID_BOARD_FROM_FILTER, 
        ADD_ID_LIST_TO_FILTER, REMOVE_ID_LIST_FROM_FILTER} from '../Actions/FilterAction'; 


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
const listsFilter = ( state = initFilter.listsFilter, action ) => {
    switch(action["type"]) {
        case ADD_ID_LIST_TO_FILTER:
        return [...state , action.payload.idList ]
        
        case REMOVE_ID_LIST_FROM_FILTER:
        return state.filter((idList) =>action.payload.idList != idList)

        default:
        return state;
    }
}
export default combineReducers({
    boardsFilter,
    listsFilter
}
)