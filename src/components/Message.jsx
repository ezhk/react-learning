import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { SelfAuthor } from "../constants";
import DeleteMessageDialog from "./dialogs/DeleteMessage";

const Message = ({ userID, message }) => {
  const [openDeleteDialod, setOpenDeleteDialod] = useState(false);

  /**
   * Function open dialog for delete message.
   */
  const handleDeleteMessage = () => {
    setOpenDeleteDialod(true);
  };

  /**
   * Collback function for DeleteMessageDialog component:
   * switch open flag to false.
   */
  const closeDeleteDialog = useCallback(() => {
    setOpenDeleteDialod(false);
  });

  /**
   * Align message, based in author name.
   */
  const messageStyle = () => {
    if (message.author === SelfAuthor) {
      return {
        justifyContent: "flex-start",
        flexDirection: "row-reverse",
      };
    }

    return { justifyContent: "flex-start" };
  };

  return (
    <div className="message" style={messageStyle()}>
      <img className="delete-image" src="/images/delete-message.svg" alt="del" onClick={handleDeleteMessage} />
      <div className="message-text">
        {message.author !== SelfAuthor ? `${message.author}: ` : null}
        {message.text}
      </div>

      <DeleteMessageDialog
        open={openDeleteDialod}
        userID={userID}
        messageID={message.id}
        handleCloseDialog={closeDeleteDialog}
      />
    </div>
  );
};

Message.propTypes = {
  userID: PropTypes.string,
  message: PropTypes.exact({
    id: PropTypes.string,
    author: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Message;
