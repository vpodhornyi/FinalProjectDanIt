import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import TwitterIcon from '@mui/icons-material/Twitter';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from 'react-redux';
import {getDialogState} from "@redux/dialog/selector";
import {DIALOG_ACTIONS} from "@redux/dialog/action";

const MAIN_COLOR = '#1D9BF0';

export default function FormDialog({children}) {
  const {open, loading} = useSelector(getDialogState);
  const dispatch = useDispatch();
  const {closeDialog} = DIALOG_ACTIONS;

  return (
    <Dialog PaperProps={{
      style: {borderRadius: 15, padding: 2, position: 'relative'}
    }}
            open={open}
            onClose={() => dispatch(closeDialog())}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton aria-label="close" sx={{
          position: 'absolute',
          top: 3,
          left: 3,
        }}
                    onClick={() => dispatch(closeDialog())}>
          <CloseIcon/>
        </IconButton>
        <TwitterIcon sx={{fontSize: 40, color: MAIN_COLOR}}/>
      </Box>
      <DialogTitle>Create your account</DialogTitle>
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
