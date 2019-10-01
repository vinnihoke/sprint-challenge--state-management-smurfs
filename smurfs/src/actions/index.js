import axios from "axios";

export const GET_VILLAGE = "GET_VILLAGE";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_TOGGLE = "GET_TOGGLE";

export const getVillage = () => dispatch => {
  dispatch({ type: GET_TOGGLE });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: GET_TOGGLE, payload: err }));
};
