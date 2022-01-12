import * as React from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default () => {
  const [year, setYear] = React.useState(new Date());
  const [month, setMonth] = React.useState(new Date());
  const [day, setDay] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DialogContentText sx={{pt: 10, fontWeight: 600, color: '#000'}}>Date of birth </DialogContentText>
      <DialogContentText sx={{fontSize: 14}}>
        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or
        something else.
      </DialogContentText>
      <Grid container>
        <Grid item xs={5} sx={{padding: '10px 0'}}>
          <TextField select sx={{width: '100%'}} id="monthe" label="Monthe" variant="outlined"/>
          {/*<DatePicker*/}
          {/*  views={['month']}*/}
          {/*  label="Month"*/}
          {/*  value={month}*/}
          {/*  onChange={(newValue) => setMonth(newValue)}*/}
          {/*  renderInput={(params) => <TextField {...params} helperText={null}/>}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={3} sx={{padding: '10px 20px'}}>
          <TextField select sx={{width: '100%'}} id="day" label="Day" variant="outlined"/>
          {/*<DatePicker*/}
          {/*  views={['day']}*/}
          {/*  label="Day"*/}
          {/*  value={day}*/}
          {/*  onChange={(newValue) => setDay(newValue)}*/}
          {/*  renderInput={(params) => <TextField {...params} helperText={null}/>}*/}
          {/*/>*/}
        </Grid>
        <Grid item xs={4} sx={{padding: '10px 0'}}>
          <TextField select sx={{width: '100%'}} id="year" label="Year" variant="outlined"/>
          {/*<DatePicker*/}
          {/*  views={['year']}*/}
          {/*  label="Year"*/}
          {/*  value={year}*/}
          {/*  onChange={(newValue) => setYear(newValue)}*/}
          {/*  renderInput={(params) => <TextField {...params} helperText={null}/>}*/}
          {/*/>*/}
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}
