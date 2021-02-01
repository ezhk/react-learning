import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

import { addContact } from "../../store/contact/actions";

const AddContactDialog = ({ open, handleCloseDialog }) => {
  const dispatch = useDispatch();
  const [accountName, setAccountName] = useState("");

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  const addAccount = () => {
    if (!accountName) return;

    dispatch(
      addContact({
        // Generate pseudo random user ID.
        userID: Math.random().toString(36).substr(2, 10),
        userName: accountName,
      })
    );
    handleClose();
  };

  const handleClose = () => {
    setAccountName("");
    handleCloseDialog();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add account</DialogTitle>
      <DialogContent>
        <DialogContentText>Input new account name below.</DialogContentText>
        <TextField type="text" autoFocus fullWidth value={accountName} onChange={handleAccountNameChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={addAccount} color="primary">
          Add
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddContactDialog.propTypes = {
  open: PropTypes.bool,
  handleCloseDialog: PropTypes.func,
};

export default AddContactDialog;
