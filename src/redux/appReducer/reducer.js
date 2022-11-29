// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  restaurants: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_RESTAURANT_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_RESTAURANT_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurants: payload,
      };
    case types.GET_RESTAURANT_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case types.FILTER_BY_TYPE:
      let filteredData = [...state.restaurants].filter(
        (item) => item.type === payload
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurants: filteredData,
      };
    case types.SORT_BY_PRICE:
      let sortedData;
      if (payload === "asc") {
        sortedData = [...state.restaurants].sort((a, b) => a.price_starts_from - b.price_starts_from);
      } else {
        sortedData = [...state.restaurants].sort((a, b) => b.price_starts_from - a.price_starts_from);
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurants: sortedData,
      };
    case types.SORT_BY_RATING:
      let sortedRating;
      if (payload === "asc") {
        sortedRating = [...state.restaurants].sort((a, b) => a.rating - b.rating);
      } else {
        sortedRating = [...state.restaurants].sort((a, b) => b.rating - a.rating);
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurants: sortedRating,
      };
    default:
      return state;
  }
};

export { reducer };
