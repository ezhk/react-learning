import { PUT_PROFILE } from "./actions";

export default function profileReducer(state = {}, action) {
  switch (action.type) {
    case PUT_PROFILE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
