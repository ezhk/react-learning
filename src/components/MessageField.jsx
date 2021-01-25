import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

import Message from "./Message";

const RobotName = "Robot";

const MessageField = () => {
  const [messageID, setMessageID] = useState(0);
  const [messages, setMessages] = useState([]);

  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    let timeout;
    if (messages.length && messages[messages.length - 1].author !== RobotName) {
      timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: messageID,
            author: RobotName,
            text: `i'm not hear something about "${messages[messages.length - 1].text}".`,
          },
        ]);

        setMessageID(messageID + 1);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages, setMessages]);

  const submitMessage = (event) => {
    event.preventDefault();

    // Ignore empty messages.
    if (inputMessage === "") return;

    setMessages([...messages, { id: messageID, author: "Me", text: inputMessage }]);
    setMessageID(messageID + 1);

    // Clean form input.
    setInputMessage("");
  };

  const handleInputMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  const renderMessages = (message) => {
    return <Message message={message} key={message.id} />;
  };

  return (
    <div className="message-field">
      <span className="title">Messages</span>
      <div className="message-field-messages">{messages.map(renderMessages)}</div>

      <br />
      <form className="message-field-form" onSubmit={submitMessage}>
        <TextField
          id="standard-basic"
          className="message-field-input"
          label="Enter message"
          value={inputMessage}
          onChange={handleInputMessageChange}
        />
        <Button type="submit" className="message-field-button" color="primary" variant="outlined">
          Send
        </Button>
      </form>
    </div>
  );
};

export default MessageField;
