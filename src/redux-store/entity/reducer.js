import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
  } from "./constants";
  
  import { FETCH_STATUSES } from "../../constants/index";
  
  const initialState = {
    characters: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DATA_REQUEST:
        return {
          ...state,
          status: FETCH_STATUSES.REQUEST,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          status: FETCH_STATUSES.SUCCESS,
          characters: action.payload.data
        };

      default:
        return { ...state };
    }
  };
  
  export default reducer;