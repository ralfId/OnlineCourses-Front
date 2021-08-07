import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForms } from "../../hooks/useForms";
import { styleAuth } from "../../Styles/auth";

export const Register = () => {

  const [formValues, handleOnchange] = useForms({
    name:'',
    lastname:'',
    username:'',
    email:'',
    pass:'',
    passconfirm:''
  })

  const { name, lastname, username, email, pass, passconfirm} = formValues;

  const registerUser = (e) => {
    e.preventDefault();

    console.log(formValues);
  }
  
  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={styleAuth.paper}>
        <Typography component="h1" variant="h5">
          Create new user account
        </Typography>
        <form style={styleAuth.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="name"
                value={name}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                label="Type your name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="lastname"
                value={lastname}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                label="Type your lastname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="username"
                value={username}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                label="Type your username"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                value={email}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                label="Type your email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="pass"
                value={pass}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                type="password"
                label="Type your password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="passconfirm"
                value={passconfirm}
                onChange={handleOnchange}
                variant="outlined"
                fullWidth
                type="password"
                label="Confirm your password"
              />
            </Grid>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                style={styleAuth.submit}
                onClick={registerUser}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
