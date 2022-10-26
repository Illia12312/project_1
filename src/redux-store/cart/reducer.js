import {
    SET_CART,
    SET_LIKE,
    REMOVE_LIKE
  } from "./constants";
  
const initialState = {
  cart: [],
  like: [],
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return {
          ...state,
          cart: [...state.cart, {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            gender: action.payload.gender,
            count: action.payload.count,}],
        };
        case SET_LIKE:
        return {
          ...state,
          like: [...state.like, {
            id: action.payload.title + action.payload.price,
            title: action.payload.title,
            price: action.payload.price}],
        };
        case REMOVE_LIKE:
        return {
          ...state,
          like: state.like.filter((item) => item.id !== action.payload.id)
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;