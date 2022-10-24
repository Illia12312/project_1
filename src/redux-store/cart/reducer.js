import {
    SET_CART
  } from "./constants";
  
  
  const initialState = {
    cart: [
        {
            id: 1,
            title: "",
            count: 1,
            price: 1,
        }
    ],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return {
          ...state,
          id: action.payload.id,
          title: action.payload.title,
          count: action.payload.count,
          price: action.payload.price,
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;