import React, { useState } from "react";
import { List, ListItemText } from "@material-ui/core";

export default function ChatList() {
  const [contacts, setContacts] = useState(["asd", "dsa", "asdasd"]);

  const renderContactList = (contact, idx) => {
    return (
      <ListItemText classes={{ root: "contacts-root" }} key={idx}>
        <span className="contacts-item">{contact}</span>
      </ListItemText>
    );
  };

  return (
    <div className="contacts">
      <span className="title">Contacts</span>
      <List>{contacts.map(renderContactList)}</List>
    </div>
  );
}
