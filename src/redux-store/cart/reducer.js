import {
    SET_CART,
    SET_LIKE,
    REMOVE_LIKE,
    SET_CART_COUNT,
    SET_CART_PRICE,
    REMOVE_CART,
    RESET_CART,
    SET_CART_FROM_LOCAL,
  } from "./constants";
  
const initialState = {
  cart: [],
  like: [],
  cartCount: 0,
  cartPrice: 0,
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // case SET_CART_FROM_LOCAL:
      //   return {
      //     ...state,
      //     cart: [...state.cart, action.payload.cart],
      //   };
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
        case REMOVE_CART:
          return{
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id)
          }
          case RESET_CART:
          return{
            ...state,
            cart: null,
          }
        // case SET_CART_PRICE:
        //   return{
        //   //   ...state,
        //   //   cartPrice: state.cart.reduce(
        //   //     (previousValue, currentValue) => previousValue + currentValue,
        //   //     0
        //   //   ),
        //   };
      default:
        return { ...state };
    }
  };
  
  export default reducer;