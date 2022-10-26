import { SET_CART, SET_LIKE, REMOVE_LIKE } from "./constants";

export const setCartAction = (cart, id, title, price, gender, count) => ({
    type: SET_CART,
    payload:{
        cart,
        id,
        title, 
        price, 
        gender, 
        count
    }
  });

export const setLikeAction = (title, price, gender) => ({
    type: SET_LIKE,
    payload:{
        title,
        price,
        gender,
    }
})

export const removeLikeAction = (id) => ({
    type: REMOVE_LIKE,
    payload:{
        id,
    }
})