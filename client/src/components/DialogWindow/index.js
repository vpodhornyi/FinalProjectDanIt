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
import {getDialogState, getDialogComponent} from "@redux/dialog/selector";
import {DIALOG_ACTIONS} from "@redux/dialog/action";

const MAIN_COLOR = '#1D9BF0';

export default function FormDialog() {
  const {open, loading, props} = useSelector(getDialogState);
  const Component = useSelector(getDialogComponent);
  const dispatch = useDispatch();
  const {closeDialog} = DIALOG_ACTIONS;

  return (
    <Dialog PaperProps={{
      style: {borderRadius: 15, padding: 2, position: 'relative', height: '70%'}
    }}
            open={open}
            onClose={() => dispatch(closeDialog())}>
      <Component/>
    </Dialog>
  );
}
