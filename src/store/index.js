import { createStore } from "redux";
import { combineReducers } from "redux";

import contactReducer from "./contact/reducer";
import messageReducer from "./message/reducer";

export const mainReducer = combineReducers({
  contact: contactReducer,
  message: messageReducer,
});
export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
