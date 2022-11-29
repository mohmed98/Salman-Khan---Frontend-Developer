// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  capsules: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CAPSULES_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_CAPSULES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        capsules: payload,
      };
    case types.GET_CAPSULES_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
