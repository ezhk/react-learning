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

  const handleClose = () => {
    handleCloseDialog();
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact({ userID: userID }));
    handleClose();
  };

  if (!userID) handleClose();
  return (
    <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="draggable-dialog-title">
      <DialogTitle id="draggable-dialog-title">Remove account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To remove account &quot;{contactName}&quot; from your contact list, please confirm it.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteContact} color="primary">
          Confirm
        </Button>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteContactDialog.propTypes = {
  open: PropTypes.bool,
  userID: PropTypes.string,
  handleCloseDialog: PropTypes.func,
};

export default DeleteContactDialog;
