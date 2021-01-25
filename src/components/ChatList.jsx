import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { List, ListItemText } from "@material-ui/core";

const ChatList = ({ selectedContactID }) => {
  const [contacts, setContacts] = useState(["Pollux", "Castor 6", "γ Gem", "μ Gem"]);

  /**
   * Define styles for contacts,
   * based on selected contact ID.
   * @param {number} idx
   */
  const contactStyle = (idx) => {
    // Compare string selectedContactID and number idx.
    if (selectedContactID == idx) {
      return { fontWeight: "bold" };
    }

    return { fontWeight: "200" };
  };

  /**
   * Render contect and generate link to chat ID.
   * If chat ID defined and not exist, redirect to default page.
   * @param {string} contact
   * @param {number} idx
   */
  const renderContactList = (contact, idx) => {
    if (selectedContactID !== undefined && contacts[selectedContactID] === undefined) {
      return <Redirect to="/" />;
    }

    return (
      <ListItemText classes={{ root: "contacts-root" }} key={idx}>
        <Link className="contacts-link" to={"/chat/" + idx}>
          <span style={contactStyle(idx)}>{contact}</span>
        </Link>
      </ListItemText>
    );
  };

  return (
    <div className="contacts">
      <span className="title">Contacts</span>
      <List>{contacts.map(renderContactList)}</List>
    </div>
  );
};

ChatList.propTypes = {
  //   contacts: PropTypes.arrayOf(PropTypes.string),
  selectedContactID: PropTypes.string,
};

export default ChatList;
