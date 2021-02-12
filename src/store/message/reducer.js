import { ADD_MESSAGE, DELETE_MESSAGE, PUT_MESSAGES } from "./actions";

export default function messageReducer(state = {}, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      if (!action.payload) return state;

      const recvMessageID =
        `${state[action.payload.userID] ? state[action.payload.userID].length : 0}-` +
        Math.random().toString(36).substr(2, 10);

      const messagesByUserID = {
        [action.payload.userID]: [
          ...(state[action.payload.userID] || []),
          {
            id: recvMessageID,
            author: action.payload.author,
            text: action.payload.text,
          },
        ],
      };

      return {
        ...state,
        ...messagesByUserID,
      };

    case DELETE_MESSAGE:
      if (!state[action.payload.userID]) return state;

      const filteredMessagesByUserID = state[action.payload.userID].filter((msg) => msg.id != action.payload.messageID);
      return {
        ...state,
        [action.payload.userID]: filteredMessagesByUserID,
      };

    case PUT_MESSAGES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
