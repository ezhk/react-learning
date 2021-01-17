import React from "react";
import PropTypes from "prop-types";

const Message = ({ message }) => {
  return (
    <div className="message">
      {message.author}: {message.text}
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.exact({
    author: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Message;
