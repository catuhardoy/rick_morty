import {ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from "./actions"

const initialState =   {
    myFavorites: [],
    allCharacters: []
  }

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
        
        return {
            ...state,
            myFavorites:[...state.allCharacters,action.payload],
            allCharacters:[...state.allCharacters, action.payload]
        }
case DELETE_FAVORITE:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
                }    

case FILTER: 
        let filterCharacters = state.allCharacters.filter(
            char => char.gender === action.payload)
        
        return {
            ...state,
            myFavorites: filterCharacters
                
            } 
            
case ORDER:
    let orderCharacters = state.allCharacters;
    
    if(action.payload ==="Ascendente")
        orderCharacters.sort((a,b) => a.id - b.id)
    if(action.payload === "Descendente")
        orderCharacters.sort((a,b) => b.id - a.id)
    
    return {
        ...state,
        myFavorites: orderCharacters
    };  
        default :
    return state; 
    }

}

export default reducer;