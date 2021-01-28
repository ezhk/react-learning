export const PUT_MESSAGE = "PUT_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const putMessage = (payload) => ({
  type: PUT_MESSAGE,
  payload,
});

export const deleteMessage = (payload) => ({
  type: DELETE_MESSAGE,
  payload,
});
