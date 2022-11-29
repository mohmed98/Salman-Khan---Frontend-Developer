import axios from "axios";
import * as types from "./actionTypes";
export const getCapsulesData = (page) => (dispatch) => {
  //   console.log("action", page);
  dispatch({ type: types.GET_CAPSULES_DATA_REQUEST });
  return axios
    .get(`https://api.spacexdata.com/v3/capsules`)
    .then(({ data }) =>
      dispatch({ type: types.GET_CAPSULES_DATA_SUCCESS, payload: data })
    )
    .catch((err) => dispatch({ type: types.GET_CAPSULES_DATA_FAILURE }));
};

//just checking if this is working or not
