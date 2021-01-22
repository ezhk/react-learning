import React from "react";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  return (
    <div
      className="message"
      style={message.author === "Me" ? { justifyContent: "flex-end" } : { justifySelf: "flex-start" }}
    >
      <div className="message-text">
        {message.author !== "Me" ? `${message.author}: ` : null}
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
