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


const SignUpPage = () => {
  const [checked, setChecked] = useState(true);
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const usernameChangeHandler = e => {
    setUsername(e.target.value);
  }

  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  }

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  }

  const validUsername = () => {
    if (userName.length < 3) {
      return true
    }
    return false
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(passWord);
    const url = "http://localhost:5000/signup"
    const body = {
      "username": userName, "password": passWord, "email": email
    }
    axios.post(url, body).then(response => {
        navigate("/thank_you");  
    }).catch(err => {
      console.log(err.response.data);
      setUsername("");
      setPassword("");
      setEmail("");
    });
  }

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ margin: '10px', marginTop: '5px', textAlign: "center"}}>Login Form</h2>
      <Paper elevation={10} className={classes.paperStyle}>
        <form onSubmit={submitHandler}>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField 
              label="User Name" 
              onChange={usernameChangeHandler} 
              value={userName}
              error={validUsername()}
              helperText={validUsername() ? "Empty!" : ""}
              ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" type={"email"} onChange={emailChangeHandler} value={email}></TextField>
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
            <Button onClick={submitHandler}> Login </Button>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default SignUpPage;
