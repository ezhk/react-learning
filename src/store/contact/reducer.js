import { INCREASE_CONTACT_NOTIFICATIONS, RESET_CONTACT_NOTIFICATIONS, ADD_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  userID1: {
    name: "Leonid Yakubovich",
    notifications: 0,
  },
  userID2: {
    name: "Chuck Norris",
    notifications: 0,
  },
};

export default function contactReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case INCREASE_CONTACT_NOTIFICATIONS:
      newState[action.payload.userID].notifications++;
      return newState;

    case RESET_CONTACT_NOTIFICATIONS:
      // Empty changes, if notifications are equal zero.
      if (!state[action.payload.userID].notifications) {
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
      // don't use break before implement.
      console.log("Not implemented", action.payload.userID);

      return Object.fromEntries(Object.entries(state).filter(([userID, _]) => userID !== action.payload.userID));
    default:
      return state;
  }
}
