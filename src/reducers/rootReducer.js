import { combineReducers } from "redux";
import todos from "./todosReducer";

const appState = {
  todos: todos,
};

const rootReducer = combineReducers(appState);

export default rootReducer;
