import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { List, ListItemText, Button } from "@material-ui/core";
import { resetContactNotifications } from "../store/contact/actions";

import AddContactDialog from "./dialogs/AddContact";
import DeleteContactDialog from "./dialogs/DeleteContact";

const Contacts = ({ selectedContactID }) => {
  const [openContactDialod, setOpenContactDialod] = useState(false);

  const [openConfirmDeleteDialod, setOpenConfirmDeleteDialod] = useState(false);
  const [beingRemovedContact, setBeingRemovedContact] = useState(null);

  const contacts = useSelector((state) => state.contact);
  const dispatcher = useDispatch();

  const handleAddContact = () => {
    setOpenContactDialod(true);
  };

  const closeContactDialog = () => {
    setOpenContactDialod(false);
  };

  const handleDeleteContact = (userID) => {
    setBeingRemovedContact(userID);
    setOpenConfirmDeleteDialod(true);
  };

  const closeDeleteContactDialog = () => {
    setOpenConfirmDeleteDialod(false);
  };

  /**
   * Define styles for contacts,
   * based on selected contact ID.
   * @param {string} userID
   */
  const contactStyle = (userID) => {
    // Compare string selectedContactID and number idx.
    if (selectedContactID === userID) {
      dispatcher(resetContactNotifications({ userID: userID }));
      return { fontWeight: "bold" };
    }

    if (contacts[userID] && contacts[userID].notifications) {
      return {
        fontWeight: "200",
        animation: "contacts-blinker 2s linear infinite",
      };
    }

    return { fontWeight: "200" };
  };

  /**
   * Render contect and generate link to chat ID.
   * @param {string} userID
   * @param {string} userName
   */
  const renderContactList = ([userID, userDescription]) => {
    return (
      <ListItemText classes={{ root: "contacts-root" }} key={userID}>
        <Link className="contacts-link" to={"/chat/" + userID}>
          <div className="contacts-record">
            <span style={contactStyle(userID)}>
              {userDescription.name}
              {contacts[userID].notifications ? ` — ${contacts[userID].notifications}` : null}
            </span>
            <img
              className="delete-image"
              src="/images/delete.svg"
              alt="del"
              onClick={() => handleDeleteContact(userID)}
            />
          </div>
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
      <div>
        <span className="title">Contacts</span>
        <List>{Object.entries(contacts).map(renderContactList)}</List>
      </div>
      <Button className="contacts-button" onClick={handleAddContact}>
        Add
      </Button>
      <AddContactDialog open={openContactDialod} handleCloseDialog={closeContactDialog} />
      <DeleteContactDialog
        open={openConfirmDeleteDialod}
        userID={beingRemovedContact}
        handleCloseDialog={closeDeleteContactDialog}
      />
    </div>
  );
};

Contacts.propTypes = {
  selectedContactID: PropTypes.string,
};

export default Contacts;
