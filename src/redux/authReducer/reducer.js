import * as types from './actionTypes'
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload} = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {...state,isLoading: true,isError: false,isAuth:false}
    case types.LOGIN_SUCCESS:
      return {...state,isLoading:false,isAuth:true,isError:false,token: payload.token}
     case types.LOGIN_FAILURE:
      return {...state,isLoading:false,isAuth:false,isError:true,token:''}   
    default:
    return state;
  }
};

export  {reducer};
