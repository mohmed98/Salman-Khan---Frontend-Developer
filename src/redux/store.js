import {
    legacy_createStore as createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  
  import { reducer as AppReducer } from "./appReducer/reducer";
  import { reducer as AuthReducer } from "./authReducer/reducer";
  const rootReducer = combineReducers({ AppReducer, AuthReducer });
  const reduxDT =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), reduxDT)
  );
  
  export {store}
  