import React from "react";
import { useParams } from "react-router-dom";

import MessageField from "./MessageField";
import ChatList from "./ChatList";

export default function Layout() {
  const { contactID } = useParams();

  return (
    <>
      <MessageField className="message-field" selectedContactID={contactID} />
      <ChatList className="chat-list" selectedContactID={contactID} />
    </>
  );
}
