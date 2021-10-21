import { combineReducers } from "redux";
import eventReducer from "./events/reducers";

const RootReducer = combineReducers({
  events: eventReducer,
});

export default RootReducer;
