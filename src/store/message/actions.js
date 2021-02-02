export const ADD_MESSAGE = "MESSAGE_ACTIONS::ADD";
export const DELETE_MESSAGE = "MESSAGE_ACTIONS::DELETE";
export const PUT_MESSAGES = "MESSAGE_ACTIONS::PUT";

export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
});

export const putMessages = (payload) => ({
  type: PUT_MESSAGES,
  payload,
});

export const deleteMessage = (payload) => ({
  type: DELETE_MESSAGE,
  payload,
});
