import React from "react";
import PropTypes from "prop-types";

const selfAuthor = "Me";

const Message = ({ message }) => {
  /**
   * Align message, based in author name.
   */
  const messageStyle = () => {
    if (message.author === selfAuthor) {
      return { justifyContent: "flex-end" };
    }

    return { justifyContent: "flex-start" };
  };

  return (
    <div className="message" style={messageStyle()}>
      <div className="message-text">
        {message.author !== selfAuthor ? `${message.author}: ` : null}
        {message.text}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.exact({
    id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Message;
