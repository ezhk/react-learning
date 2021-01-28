import { GET_CONTACTS, PUT_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  userID1: "Leonid Yakubovich",
  userID2: "Chuck Norris",
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state };

    case PUT_CONTACT:
      return Object.assign({}, state, { [action.payload.userID]: action.payload.userName });

    case DELETE_CONTACT:
    default:
      return state;
  }
}
