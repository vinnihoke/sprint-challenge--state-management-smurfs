import { GET_TOGGLE, GET_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
  error: "",
  awaitingResponse: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOGGLE":
      return {
        ...state,
        awaitingResponse: !state.awaitingResponse,
        error: action.payload ? action.payload : ""
      };
    case "GET_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        awaitingResponse: false,
        error: ""
      };
    default:
      return state;
  }
};

export default asyncReducer;
