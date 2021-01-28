import { createStore } from "redux";
import { combineReducers } from "redux";

import contactReducer from "./contact/reducer";
import messageReducer from "./message/reducer";
import profileReducer from "./profile/reducer";

export const mainReducer = combineReducers({
  contact: contactReducer,
  message: messageReducer,
  profile: profileReducer,
});
export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
