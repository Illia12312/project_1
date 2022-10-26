import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    SET_USER,
    REMOVE_USER,
    SET_AMOUNT,
    GET_SPLICED_ITEMS,
  } from "./constants";
  
  import { FETCH_STATUSES } from "../../constants/index";
  
  const initialState = {
    characters: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
    email: null,
    token: null,
    id: null,
    name: null,
    amount: 10,
    splicedItems: [],
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
      case SET_USER:
        return{
          ...state,
          email: action.payload.email,
          token: action.payload.token,
          id: action.payload.id,
          name: action.payload.name,
        };
        case REMOVE_USER:
        return{
          ...state,
          email: null,
          token: null,
          id: null,
          name: null,
        };
        case SET_AMOUNT:
        return{
          ...state,
          amount: state.amount + 10,
        };
        case GET_SPLICED_ITEMS:
        return{
          ...state,
          splicedItems: state.characters.splice(0, state.amount),
        };
      default:
        return { ...state };
    }
  };
  
  export default reducer;