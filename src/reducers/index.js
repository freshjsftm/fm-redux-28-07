import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  usersState: userReducer
})

export default rootReducer;