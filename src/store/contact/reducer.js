import { PUT_CONTACT, DELETE_CONTACT } from "./actions";

const initialState = {
  userID1: "Leonid Yakubovich",
  userID2: "Chuck Norris",
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_CONTACT:
      return Object.assign({}, state, { [action.payload.userID]: action.payload.userName });

    case DELETE_CONTACT:
      // don't use break before implement.
      console.log("Not implemented");
    default:
      return state;
  }
}
