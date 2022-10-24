import {
    GET_DATA_FAILURE,
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
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