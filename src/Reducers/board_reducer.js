import { combineReducers } from 'redux';
import {SET_BOARDS} from '../Actions/actionBoards'; 

export const boards = (state = Array(), action ) => {
    switch(action["type"]) {
      case SET_BOARDS:
      console.log(action.payload)
      return action.payload;      

      default:
        return state;
    }
  }
  export default combineReducers({
    boards,
})