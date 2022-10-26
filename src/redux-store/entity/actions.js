import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    SET_USER,
    REMOVE_USER,
    SET_AMOUNT,
    GET_SPLICED_ITEMS,
  } from "./constants";
  
  
  export const getDataRequestAction = () => ({
    type: GET_DATA_REQUEST,
  });
  
  export const getDataSuccessAction = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: {
      data,
    },
  });
  
  export const getDataFailureAction = (error) => ({
    type: GET_DATA_FAILURE,
    payload: {
      error,
    },
  });

    export const setUserAction = (email, token, id, name) => ({
      type: SET_USER,
      payload: {
        email,
        token, 
        id, 
        name,
      },
    });

    export const romoveUserAction = (email, token, id, name) => ({
      type: REMOVE_USER,
      payload: {
        email,
        token, 
        id, 
        name,
      },
    });

    export const setAmountAction = () =>({
      type: SET_AMOUNT,
    });

    export const getSplicedItems = () => ({
      type: GET_SPLICED_ITEMS,
    })