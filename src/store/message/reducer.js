import { GET_MESSAGES, PUT_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {
  userID1: [
    {
      id: 0,
      author: "Leonid Yakubovich",
      text: "Hello",
    },
    {
      id: 1,
      author: "Me",
      text: "World",
    },
  ],
  messageID: 2,
};

export default function messageReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_MESSAGES:
      return state[action.payload.userID] || [];

    case PUT_MESSAGE:
      if (!action.payload) return state;

      const messagesByUserID = {
        [action.payload.userID]: [
          ...(state[action.payload.userID] || []),
          {
            id: state.messageID,
            author: action.payload.author,
            text: action.payload.text,
          },
        ],
      };

      return Object.assign({}, state, { ...messagesByUserID }, { messageID: state.messageID + 1 });

    case DELETE_MESSAGE:
    default:
      return state;
  }
}
