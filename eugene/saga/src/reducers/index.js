import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import postReducer from "./postReducer.js";

const rootReducer = combineReducers({
  authReducer,
  postReducer,
});

export default rootReducer;
