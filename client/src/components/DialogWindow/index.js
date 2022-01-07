import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch, useSelector} from 'react-redux';
import {getDialogState} from "@redux/dialog/selector";
import {DIALOG_ACTIONS} from "@redux/dialog/action";

export default function FormDialog({children}) {
  const {open, loading} = useSelector(getDialogState);
  const dispatch = useDispatch();
  const {closeDialog} = DIALOG_ACTIONS;

  return (
    <Dialog open={open} onClose={() => dispatch(closeDialog())}>
      <DialogTitle>Subscribe</DialogTitle>
      {/*<DialogContent>*/}
      {/*  <DialogContentText>*/}
      {/*    To subscribe to this website, please enter your email address here. We*/}
      {/*    will send updates occasionally.*/}
      {/*  </DialogContentText>*/}
      {/*  <TextField*/}
      {/*    autoFocus*/}
      {/*    margin="dense"*/}
      {/*    id="name"*/}
      {/*    label="Email Address"*/}
      {/*    type="email"*/}
      {/*    fullWidth*/}
      {/*    variant="standard"*/}
      {/*  />*/}
      {/*</DialogContent>*/}
      {/*<DialogActions>*/}
      {/*  <Button onClick={handleClose}>Cancel</Button>*/}
      {/*  <Button onClick={handleClose}>Subscribe</Button>*/}
      {/*</DialogActions>*/}
      {children}
    </Dialog>
  );
}
