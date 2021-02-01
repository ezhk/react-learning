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

  const handleClose = () => {
    handleCloseDialog();
  };

  const handleDeleteMessage = () => {
    dispatch(deleteMessage({ userID, messageID }));
    handleClose();
  };

  if (!messageID) handleClose();
  return (
    <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="draggable-dialog-title">
      <DialogTitle id="draggable-dialog-title">Remove messagge</DialogTitle>
      <DialogContent>
        <DialogContentText>Please confirm message removing.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteMessage} color="primary">
          Confirm
        </Button>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteMessageDialog.propTypes = {
  open: PropTypes.bool,
  userID: PropTypes.string,
  messageID: PropTypes.number,
  handleCloseDialog: PropTypes.func,
};

export default DeleteMessageDialog;
