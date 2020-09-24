import { combineReducers } from "redux";
import pageReducers from "./pageReducer";

const rootReducer = combineReducers({
  pageReducers,
});

export default rootReducer;
