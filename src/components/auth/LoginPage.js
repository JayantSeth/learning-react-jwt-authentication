import React from 'react';

import {
Checkbox, 
TextField,
FormControlLabel,
Paper,
Button,
Grid
} from '@mui/material'

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  paperStyle: {
    background: 'linear-gradient(45deg, #455a64 50%, #455a64 50%)',
    width: '50%',
    justify: 'center',
    marginTop: '40px',
    margin: "auto",
    textAlign: "center",
  }
});

const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ margin: '10px', marginTop: '5px', textAlign: "center"}}>Login Form</h2>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="User Name"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
