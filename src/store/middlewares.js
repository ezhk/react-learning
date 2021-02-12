import { increaseContactNotifications } from "./contact/actions";
import { putMessage as putMessageAction } from "./message/actions";

import { SelfAuthor } from "../constants";

export const putMessage = (payload) => (dispatch, getState) => {
  dispatch(putMessageAction(payload));
  if (payload.author !== SelfAuthor) {
    dispatch(increaseContactNotifications({ userID: payload.userID }));
  }

  /**
   * Autoreply by robot.
   */
  setTimeout(() => {
    const messagesByUserID = getState().message[payload.userID] || [];
    const RobotName = "Robot";

    if (messagesByUserID.length && messagesByUserID[messagesByUserID.length - 1].author !== RobotName) {
      dispatch(
        putMessageAction({
          userID: payload.userID,
          author: RobotName,
          text: `i'm not hear something about "${messagesByUserID[messagesByUserID.length - 1].text}".`,
        })
      );
      dispatch(increaseContactNotifications({ userID: payload.userID }));
    }
  }, 2000);
};
