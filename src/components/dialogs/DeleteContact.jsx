import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import { deleteContact } from "../../store/contact/actions";

const DeleteContactDialog = ({ open, userID, handleCloseDialog }) => {
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const contactName = contact[userID] ? contact[userID].name : "null";

  const handleClose = (event) => {
    event.preventDefault();
    handleCloseDialog();
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact({ userID: userID }));
    handleCloseDialog();
  };

  if (!userID) return null;
  return (
    <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="draggable-dialog-delete-contact">
      <form onSubmit={handleClose}>
        <DialogTitle id="draggable-dialog-delete-contact">Remove account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To remove account &quot;{contactName}&quot; from your contact list, please confirm it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteContact} color="primary" variant="outlined">
            Confirm
          </Button>
          <Button autoFocus type="submit" color="primary" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

DeleteContactDialog.propTypes = {
  open: PropTypes.bool,
  userID: PropTypes.string,
  handleCloseDialog: PropTypes.func,
};

export default DeleteContactDialog;
