import { SET_CART } from "./constants";

export const getDataRequestAction = (id, title, count, price) => ({
    type: SET_CART,
    payload:{
        id,
        title,
        count,
        price,
    }
  });