import { SET_CART, SET_LIKE, REMOVE_LIKE, SET_CART_COUNT, SET_CART_PRICE, REMOVE_CART, RESET_CART } from "./constants";

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

export const setCartPriceACtion = (cart) => (
    {
        type: SET_CART_PRICE,
        payload: {
            cart,
        }
    }
)

export const removeCartAction = (id) =>({
    type: REMOVE_CART,
    payload:{
        id,
    }
})

export const resetCartAction = (cart) => ({
    type: RESET_CART,
    payload:{
        cart,
    }
})