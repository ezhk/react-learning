export const INCREASE_CONTACT_NOTIFICATIONS = "CONTACT_ACTIONS::INCREASE_NOTIFICATIONS";
export const RESET_CONTACT_NOTIFICATIONS = "CONTACT_ACTIONS::RESET_NOTIFICATIONS";

export const ADD_CONTACT = "CONTACT_ACTIONS::ADD";
export const DELETE_CONTACT = "CONTACT_ACTIONS::DELETE";

export const PUT_CONTACTS = "CONTACT_ACTIONS::PUT";

export const increaseContactNotifications = (payload) => ({
  type: INCREASE_CONTACT_NOTIFICATIONS,
  payload,
});

export const resetContactNotifications = (payload) => ({
  type: RESET_CONTACT_NOTIFICATIONS,
  payload,
});

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const deleteContact = (payload) => ({
  type: DELETE_CONTACT,
  payload,
});

export const putContacts = (payload) => ({
  type: PUT_CONTACTS,
  payload,
});
