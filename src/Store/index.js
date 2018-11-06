import { createStore } from 'redux'; 
import reducers from '../Reducers'; 
import data from '../Data/cards.json'  ; 

const store = createStore(reducers ,
    {
        "cards" : data, 
        
    } ); 

export default store ; 