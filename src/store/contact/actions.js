export const GET_CONTACTS = "GET_CONTACTS";
export const PUT_CONTACT = "PUT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const getContacts = () => ({
  type: GET_CONTACTS,
});

export const putContact = (payload) => ({
  type: PUT_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});
