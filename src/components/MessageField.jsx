import React, { useState, useEffect } from "react";
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

    setMessages(messages.concat({ author: "Me", text: inputMessage }));
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
      <form className="input-message-form">
        <label htmlFor="message-input"></label>
        <input id="message-input" type="text" value={inputMessage} onChange={handleInputMessageChange} />

        <button onClick={submitMessage}>Send</button>
      </form>
    </div>
  );
};

export default MessageField;
