import React, { useCallback, useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { List, ListItemText, Button } from "@material-ui/core";
import { resetContactNotifications } from "../store/contact/actions";
import { updateContacts } from "../store/middlewares";

import AddContactDialog from "./dialogs/AddContact";
import DeleteContactDialog from "./dialogs/DeleteContact";

const Contacts = ({ selectedContactID }) => {
  const [openContactDialod, setOpenContactDialod] = useState(false);

  const [openConfirmDeleteDialod, setOpenConfirmDeleteDialod] = useState(false);
  const [beingRemovedContact, setBeingRemovedContact] = useState(null);

  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateContacts());
  }, []);
  useEffect(() => {
    // Reset notifications for user, when living active chat.
    return dispatch(resetContactNotifications({ userID: selectedContactID }));
  });

  /**
   * Function open dialog for add contact.
   */
  const handleAddContact = () => {
    setOpenContactDialod(true);
  };

  /**
   * Collback function for AddContactDialog component:
   * switch open flag to false.
   */
  const closeContactDialog = useCallback(() => {
    setOpenContactDialod(false);
  });

  /**
   * Setup currect removing contact and show confirm popup.
   * @param {string} userID
   */
  const handleDeleteContact = (userID) => {
    setBeingRemovedContact(userID);
    setOpenConfirmDeleteDialod(true);
  };

  /**
   * Collback function for DeleteContactDialog component:
   * switch open flag to false.
   */
  const closeDeleteContactDialog = useCallback(() => {
    setOpenConfirmDeleteDialod(false);
  });

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

              {/* Display notification only for unselected contacts */}
              {selectedContactID !== userID && contacts[userID].notifications
                ? ` — ${contacts[userID].notifications}`
                : null}
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
      <div className="contacts-wrapper">
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
    </div>
  );
};

Contacts.propTypes = {
  selectedContactID: PropTypes.string,
};

export default Contacts;
