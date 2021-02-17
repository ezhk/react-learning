import React from "react";
import { useParams } from "react-router-dom";

import MessageField from "./MessageField";
import Contacts from "./Contacts";

export default function Layout() {
  const { contactID } = useParams();

  return (
    <>
      <Contacts className="chat-list" selectedContactID={contactID} />
      <MessageField className="message-field" selectedContactID={contactID} />
    </>
  );
}
