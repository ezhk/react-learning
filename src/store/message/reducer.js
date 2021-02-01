import { PUT_MESSAGE, DELETE_MESSAGE } from "./actions";

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

  latestMessageID: 2,
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case PUT_MESSAGE:
      if (!action.payload) return state;

      const messagesByUserID = {
        [action.payload.userID]: [
          ...(state[action.payload.userID] || []),
          {
            id: state.latestMessageID,
            author: action.payload.author,
            text: action.payload.text,
          },
        ],
      };

      return {
        ...state,
        ...messagesByUserID,
        latestMessageID: state.latestMessageID + 1,
      };

    case DELETE_MESSAGE:
      // // don't use break before implement.
      // console.log("Not implemented");
      // console.log(state, action.payload.userID, action.payload.messageID);
      if (!state[action.payload.userID]) return state;

      const filteredMessagesByUserID = state[action.payload.userID].filter((msg) => msg.id != action.payload.messageID);
      return {
        ...state,
        [action.payload.userID]: filteredMessagesByUserID,
      };
    default:
      return state;
  }
}
