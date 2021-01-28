export const GET_MESSAGES = "GET_MESSAGES";
export const PUT_MESSAGE = "PUT_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const getMessages = (payload) => ({
  type: GET_MESSAGES,
  payload,
});

export const putMessage = (payload) => ({
  type: PUT_MESSAGE,
  payload,
});

export const deleteMessage = (payload) => ({
  type: DELETE_MESSAGE,
  payload,
});
