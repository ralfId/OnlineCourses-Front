import React from "react";
import { Avatar, Button, Container, TextField, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { styleAuth } from "../../Styles/auth";
import { useForms } from "../../hooks/useForms";
import { loginUser } from "../../actions/auth";
import { useDispatch } from "react-redux";

export const Login = () => {

  const dispatch = useDispatch();

  const[ formValues, handleOnChange] = useForms({
    email: '',
    password: ''
  })

  const {email, password } = formValues;

  const userLogin = (e) => {
    e.preventDefault();
  
    dispatch(loginUser(formValues));
  }
  
  return (
    <Container maxWidth="xs">
      <div style={styleAuth.paper}>
        <Avatar style={styleAuth.avatar}>
          <LockIcon style={styleAuth.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Login
        </Typography>
        <form onSubmit={userLogin}>
            <TextField name='email' value={email} onChange={handleOnChange} variant="outlined" fullWidth type="email" label="Input email" margin="normal"/>
            <TextField name='password' value={password} onChange={handleOnChange} variant="outlined" fullWidth type="password" label="Input password" margin="normal"/>

            <Button type="submit" fullWidth variant="contained" color="primary" style={styleAuth.submit}>
                Login
            </Button>
        </form>
      </div>
    </Container>
  );
};
