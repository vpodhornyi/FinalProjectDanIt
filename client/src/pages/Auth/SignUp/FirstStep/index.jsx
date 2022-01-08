import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CustomButton from '../../../../components/CustomButton';
import {DIALOG_ACTIONS} from "@redux/dialog/action";

const MAIN_COLOR = '#1D9BF0';
const CUSTOM_BUTTON_NEXT = `
    background-color: #000;
    color: #fff;
      &:hover {
        background-color: #444;
    }`;
const CUSTOM_BUTTON_NEXT_NAME = 'Next';

export default () => {
  const dispatch = useDispatch();
  const {closeDialog} = DIALOG_ACTIONS;

  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton aria-label="close" sx={{
          position: 'absolute',
          top: 5,
          left: 5,
        }}
                    onClick={() => dispatch(closeDialog())}>
          <CloseIcon/>
        </IconButton>
        <TwitterIcon sx={{fontSize: 40, color: MAIN_COLOR}}/>
      </Box>
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Box>
          <DialogTitle>Create your account</DialogTitle>
          <DialogContent>
            <Grid>
              <Grid item xs={12} sx={{padding: '10px 0'}}>
                <TextField sx={{width: '100%'}} id="name" label="Name" variant="outlined"/>
              </Grid>
              <Grid item sx={{padding: '10px 0'}}>
                <TextField id="email" sx={{width: '100%'}} label="Email" variant="outlined"/>
              </Grid>
            </Grid>
            <DialogContentText sx={{pt: 10, fontWeight: 600, color: '#000'}}>Date of birth </DialogContentText>
            <DialogContentText sx={{fontSize: 14}}>
              This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
              something else.
            </DialogContentText>
            <Grid container>
              <Grid item xs={5} sx={{padding: '10px 0'}}>
                <TextField sx={{width: '100%'}} id="monthe" label="Monthe" variant="outlined"/>
              </Grid>
              <Grid item xs={3} sx={{padding: '10px 20px'}}>
                <TextField sx={{width: '100%'}} id="day" label="Day" variant="outlined"/>
              </Grid>
              <Grid item xs={4} sx={{padding: '10px 0'}}>
                <TextField sx={{width: '100%'}} id="year" label="Year" variant="outlined"/>
              </Grid>
            </Grid>
          </DialogContent>
        </Box>
        <Box>
          <DialogContent>
            <CustomButton
              customStyle={CUSTOM_BUTTON_NEXT}
              name={CUSTOM_BUTTON_NEXT_NAME}
              onclickAction={() => openDialog()}
            />
          </DialogContent>
        </Box>
      </Box>
    </>
  );
}
