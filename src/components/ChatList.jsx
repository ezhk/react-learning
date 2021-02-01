import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import { List, ListItemText } from "@material-ui/core";

const ChatList = ({ selectedContactID }) => {
  const contacts = useSelector((state) => state.contact);

  /**
   * Define styles for contacts,
   * based on selected contact ID.
   * @param {string} userID
   */
  const contactStyle = (userID) => {
    // Compare string selectedContactID and number idx.
    if (selectedContactID === userID) {
      return { fontWeight: "bold" };
    }

    return { fontWeight: "200" };
  };

  /**
   * Render contect and generate link to chat ID.
   * @param {string} userID
   * @param {string} userName
   */
  const renderContactList = ([userID, userName]) => {
    return (
      <ListItemText classes={{ root: "contacts-root" }} key={userID}>
        <Link className="contacts-link" to={"/chat/" + userID}>
          <span style={contactStyle(userID)}>{userName}</span>
        </Link>
      </ListItemText>
    );
  };

  // If chat ID defined and not exist, redirect to default page.
  if (selectedContactID && !contacts[selectedContactID]) {
    return <Redirect to="/" />;
  }

  return (
    <div className="contacts">
      <span className="title">Contacts</span>
      <List>{Object.entries(contacts).map(renderContactList)}</List>
    </div>
  );
};

ChatList.propTypes = {
  selectedContactID: PropTypes.string,
};

export default ChatList;
