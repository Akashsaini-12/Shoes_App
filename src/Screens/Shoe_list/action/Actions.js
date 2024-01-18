import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes"
//new
import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST } from "../ActionTypes"
export const addIemToCart = (data)=> ({
    type: ADD_ITEM,
    payload:data
})

export const removeIemFromCart = (index)=> ({
    type: REMOVE_ITEM,
    payload:index
})

//new
export const addToWishList = (data)=> ({
    type: ADD_TO_WISHLIST,
    payload:data
})

// export const RemoveFromWishList = (index)=> ({
//     type: REMOVE_FROM_WISHLIST,
//     payload:index
// })


