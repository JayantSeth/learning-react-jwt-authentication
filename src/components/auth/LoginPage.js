import React, { useState } from 'react';

import {
Checkbox, 
TextField,
FormControlLabel,
Paper,
Button,
Grid
} from '@mui/material'

import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router';


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
  const [checked, setChecked] = useState(true);
  const classes = useStyles();
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  }

  const passwordChangeHandler = e => {
    setPassword(e.target.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    const url = "http://localhost:5000/signin";
    const body = {
      "username": userName, "password": passWord
    }
    axios.post(url, body).then(response => {
      console.log(response.data.access_token);
      console.log(response.data.refresh_token);
      Navigate("/home");
    }).catch( err => {
      setUsername("");
      setPassword("");
      console.log(err.response.data);
    })
  }

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ margin: '10px', marginTop: '5px', textAlign: "center"}}>Login Form</h2>
      <Paper elevation={10} className={classes.paperStyle}>
        <form onSubmit={onSubmitHandler}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="User Name" onChange={usernameChangeHandler} value={userName}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'} onChange={passwordChangeHandler} value={passWord}></TextField>
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
            <Button 
              type="submit"
              color="primary"
            > Login </Button>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
