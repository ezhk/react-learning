import React, { useState } from "react";
import PropTypes from "prop-types";

import DeleteMessageDialog from "./dialogs/DeleteMessage";

const selfAuthor = "Me";
const Message = ({ userID, message }) => {
  const [openDeleteDialod, setOpenDeleteDialod] = useState(false);

  const handleDeleteMessage = () => {
    setOpenDeleteDialod(true);
  };

  const closeDeleteDialog = () => {
    setOpenDeleteDialod(false);
  };

  /**
   * Align message, based in author name.
   */
  const messageStyle = () => {
    if (message.author === selfAuthor) {
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
        {message.author !== selfAuthor ? `${message.author}: ` : null}
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
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Message;
