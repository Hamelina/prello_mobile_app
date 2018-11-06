
import { combineReducers } from 'redux';
import {defaultState , LOGIN , LOGOUT, SIGNUP } from '../Actions/auth'; 

const auth = (state = defaultState, action) => {
    switch (action["type"]) {
        case LOGIN: 
            return  [...state , action.payload.isLoggedIn]; 
            //  Object.assign({}, state, { 
            //     isLoggedIn: true,
            //     username: action.username,
            //     password: action.password
            
            //});
        case LOGOUT: [...state , action.payload.isLoggedIn]; 
            return 
            // Object.assign({}, state, { 
            //     isLoggedIn: false,
            //     username: '',
            //     password: ''
            // });
        default:
            return state;
    }
}

export default combineReducers({
    auth,
})