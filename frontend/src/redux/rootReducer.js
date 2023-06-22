import { combineReducers } from "redux";
import updateUiReducer from "./updateUiReducer";

const rootReducer = combineReducers({
  updateUI: updateUiReducer,
});

export default rootReducer;
