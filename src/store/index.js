import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactReducer from "./contact/reducer";
import messageReducer from "./message/reducer";
import profileReducer from "./profile/reducer";

const persistConfig = {
  key: "messanger",
  storage,
};
const mainReducer = combineReducers({
  contact: contactReducer,
  message: messageReducer,
  profile: profileReducer,
});
const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
