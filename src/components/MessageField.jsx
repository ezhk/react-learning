import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button, TextField } from "@material-ui/core";

import Message from "./Message";
import { putMessage } from "../store/message/actions";

const RobotName = "Robot";

const MessageField = ({ messages, putMessage, selectedContactID }) => {
  const [inputMessage, setInputMessage] = useState("");

  /**
   * Store Object{author, text} to messages list for chosen contact.
   * @param {string} author
   * @param {string} text
   */
  const appendMessage = (author, text) => {
    putMessage({ userID: selectedContactID, author, text });
  };

  /**
   * Autoreply by robot.
   */
  useEffect(() => {
    let timeout;

    const messagesByID = messages[selectedContactID] || [];
    if (messagesByID.length && messagesByID[messagesByID.length - 1].author !== RobotName) {
      timeout = setTimeout(() => {
        appendMessage(RobotName, `i'm not hear something about "${messagesByID[messagesByID.length - 1].text}".`);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  /**
   * Click button event.
   */
  const submitMessage = (event) => {
    event.preventDefault();

    // Ignore empty messages.
    if (inputMessage === "") return;
    appendMessage("Me", inputMessage);

    // Clean form input.
    setInputMessage("");
  };

  const handleInputMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  /**
   * Main render block: show helper if chat not chosen
   * or display messages for contact with renderMessages function.
   */
  const renderMessageField = () => {
    // Show helper, if contanct not selected.
    if (selectedContactID === undefined) {
      return (
        <div className="message-field-helper">
          Start from choosing your contact
          <img className="message-field-helper-image" src="images/arrow-right.svg" alt=">" />
        </div>
      );
    }

    return (
      <>
        <span className="title">Messages</span>
        <div className="message-field-messages">{renderMessages()}</div>

        <br />
        <form className="message-field-form" onSubmit={submitMessage}>
          <TextField
            id="standard-basic"
            className="message-field-input"
            label="Enter message"
            value={inputMessage}
            disabled={selectedContactID === undefined}
            onChange={handleInputMessageChange}
          />
          <Button
            type="submit"
            className="message-field-button"
            color="primary"
            variant="outlined"
            disabled={selectedContactID === undefined}
          >
            Send
          </Button>
        </form>
      </>
    );
  };

  /**
   * Function render messages list,
   * and forEach message call renderOneMessage().
   */
  const renderMessages = () => {
    if (selectedContactID === undefined) return;

    const messagesByID = messages[selectedContactID] || [];
    return messagesByID.map(renderOneMessage);
  };

  /**
   * Function return Message block with text as param..
   * @param {string} message
   */
  const renderOneMessage = (message) => {
    return <Message message={message} key={message.id} />;
  };

  return <div className="message-field">{renderMessageField()}</div>;
};

MessageField.propTypes = {
  messages: PropTypes.any,
  putMessage: PropTypes.any,

  selectedContactID: PropTypes.string,
};

const mapStateToProps = (state) => ({ messages: state.message });
const mapDispatchToProps = { putMessage };

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
