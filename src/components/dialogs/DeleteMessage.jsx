import React from "react";
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

import { deleteMessage } from "../../store/message/actions";

const DeleteMessageDialog = ({ open, userID, messageID, handleCloseDialog }) => {
  const dispatch = useDispatch();

  const handleClose = (event) => {
    event.preventDefault();
    handleCloseDialog();
  };

  const handleDeleteMessage = () => {
    dispatch(deleteMessage({ userID, messageID }));
    handleCloseDialog();
  };

  if (!messageID) return null;
  return (
    <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="draggable-dialog-delete-message">
      <form onSubmit={handleClose}>
        <DialogTitle id="draggable-dialog-delete-message">Remove messagge</DialogTitle>
        <DialogContent>
          <DialogContentText>Please confirm message removing.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteMessage} color="primary" variant="outlined">
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

DeleteMessageDialog.propTypes = {
  open: PropTypes.bool,
  userID: PropTypes.string,
  messageID: PropTypes.string,
  handleCloseDialog: PropTypes.func,
};

export default DeleteMessageDialog;
