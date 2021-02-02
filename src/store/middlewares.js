import { increaseContactNotifications } from "./contact/actions";

import { putProfile } from "./profile/actions";
import { putContacts } from "./contact/actions";
import { addMessage as addMessageAction, putMessages } from "./message/actions";

import { apiContactsURL, apiMessagesURL, apiProfileURL, SelfAuthor, RobotName } from "../constants";

/**
 * Function add new message, increase user counter
 * and autoreply by robot user.
 * @param {Object} payload
 */
export const addMessage = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.author !== SelfAuthor) {
    dispatch(increaseContactNotifications({ userID: payload.userID }));
  }

  /**
   * Autoreply by robot.
   */
  setTimeout(() => {
    const messagesByUserID = getState().message[payload.userID] || [];

    if (messagesByUserID.length && messagesByUserID[messagesByUserID.length - 1].author !== RobotName) {
      dispatch(
        addMessageAction({
          userID: payload.userID,
          author: RobotName,
          text: `i'm not hear something about "${messagesByUserID[messagesByUserID.length - 1].text}".`,
        })
      );
      dispatch(increaseContactNotifications({ userID: payload.userID }));
    }
  }, 2000);
};

/**
 * Fetch profile JSON from API and update profile.
 */
export const updateProfile = () => (dispatch) => {
  fetch(apiProfileURL)
    .then((response) => response.json())
    .then((payload) => dispatch(putProfile(payload)))
    .catch((err) => console.log(err));
};

/**
 * Fetch contacts JSON from API and update contacts.
 */
export const updateContacts = () => (dispatch) => {
  fetch(apiContactsURL)
    .then((response) => response.json())
    .then((payload) => dispatch(putContacts(payload)))
    .catch((err) => console.log(err));
};

/**
 * Fetch messages JSON from API and update messages.
 */
export const updateMessages = () => (dispatch) => {
  fetch(apiMessagesURL)
    .then((response) => response.json())
    .then((payload) => dispatch(putMessages(payload)))
    .catch((err) => console.log(err));
};
