import axios from "axios";
import * as types from "./actionType";
export const getRestaurantsData = (page) => (dispatch) => {
  console.log("action", page);
  dispatch({ type: types.GET_RESTAURANT_DATA_REQUEST });
  return axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=20`
    )
    .then(({ data }) =>
      dispatch({ type: types.GET_RESTAURANT_DATA_SUCCESS, payload: data.data })
    )
    .catch((err) => dispatch({ type: types.GET_RESTAURANT_DATA_FAILURE }));
};

export const filterByType = (payload) => (dispatch) => {
       dispatch({ type: types.FILTER_BY_TYPE, payload: payload})
}

export const sortByPrice = (payload) => (dispatch) => {
      dispatch({ type: types.SORT_BY_PRICE,payload})
}
export const sortByRating = (payload) => (dispatch) => {
      dispatch({ type: types.SORT_BY_RATING,payload})
}
//just checking if this is working or not