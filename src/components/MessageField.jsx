import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

import Message from "./Message.jsx";

const MessageField = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const [robotAnswer, setRobotAnswer] = useState(false);

  useEffect(() => {
    if (robotAnswer !== false) {
      setMessages(messages.concat({ author: "Robot", text: robotAnswer }));
      setRobotAnswer(false);
    }
  }, [messages, robotAnswer, setMessages]);

  const submitMessage = (event) => {
    event.preventDefault();

    // Ignore empty messages.
    if (inputMessage === "") return;

    setMessages([...messages, { author: "Me", text: inputMessage }]);
    setInputMessage("");

    setRobotAnswer(`i'm not hear something about "${inputMessage}".`);
  };

  const handleInputMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div className="message-field">
      {messages.map((message, idx) => (
        <Message message={message} key={idx} />
      ))}

      <br />
      <form className="input-message-form" onSubmit={submitMessage}>
        <label htmlFor="message-input"></label>
        <TextField id="standard-basic" label="Enter message" value={inputMessage} onChange={handleInputMessageChange} />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default MessageField;
