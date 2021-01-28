export const PUT_CONTACT = "PUT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const putContact = (payload) => ({
  type: PUT_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
