import {
  INCREASE_CONTACT_NOTIFICATIONS,
  RESET_CONTACT_NOTIFICATIONS,
  ADD_CONTACT,
  DELETE_CONTACT,
  PUT_CONTACTS,
} from "./actions";

export default function contactReducer(state = {}, action) {
  const newState = { ...state };

  switch (action.type) {
    case INCREASE_CONTACT_NOTIFICATIONS:
      newState[action.payload.userID].notifications++;
      return newState;

    case RESET_CONTACT_NOTIFICATIONS:
      // Empty changes, if notifications are equal zero.
      if (!state[action.payload.userID] || !state[action.payload.userID].notifications) {
        return state;
      }

      newState[action.payload.userID].notifications = 0;
      return newState;

    case ADD_CONTACT:
      newState[action.payload.userID] = {
        name: action.payload.userName,
        notifications: 0,
      };
      return newState;

    case DELETE_CONTACT:
      return Object.fromEntries(Object.entries(state).filter(([userID, _]) => userID !== action.payload.userID));

    case PUT_CONTACTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
