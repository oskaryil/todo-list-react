import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  todo: TodoReducer,
  auth: AuthReducer
});
