import { ADD_ITEM,  ADD_TO_WISHLIST,  REMOVE_ITEM} from "../ActionTypes";

export const Reducers= (state=[] ,action)=>{
switch(action.type){
case ADD_ITEM:
    {
        return [...state,action.payload];
    }
    case REMOVE_ITEM:
    {
        const deleteArray = state.filter((item, index) => {
            return (index !== action.payload);
        })
     return deleteArray;
    }
    case ADD_TO_WISHLIST:
    {
        return [...state,action.payload];
    }
    
      default:{
        return state;
    }

    
}
}
export default Reducers;
