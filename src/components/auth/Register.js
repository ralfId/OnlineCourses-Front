import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForms } from "../../hooks/useForms";

import { styleAuth } from "../../Styles/auth";
import { registerUser } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();

  const [registerAs, setRegisterAs] = useState("student");
  const [formValues, handleOnchange] = useForms({
    name: "Rafael",
    lastname: "ID",
    username: "",
    email: "",
    pass: "Pass@123",
    passconfirm: "Pass@123",
  });

  // console.log(registerAs)
  const handleChange = (event) => {
    setRegisterAs(event.target.value);
    // console.log(registerAs)
  };
  const { name, lastname, username, email, pass, passconfirm } = formValues;

  const register = (e) => {
    e.preventDefault();

    dispatch(registerUser(name, lastname, username, email, pass, registerAs));

  };

  return (
    <Container
      component="main"
      maxWidth="md"
      justify="center"
      className="container-mt4"
    >
      <Paper elevation={3} className="container-px container-py">
        <div style={styleAuth.paper}>
          <Typography component="h1" variant="h5">
            Create new user account
          </Typography>

          <FormControl component="fieldset" className="container-py">
            <RadioGroup
              row
              value={registerAs}
              onChange={handleChange}
            >
              <FormControlLabel
                name="student"
                value="student"
                control={<Radio />}
                label="Register as student"
              />
              <FormControlLabel
                name="instructor"
                value="rootinstructor"
                control={<Radio />}
                label="Register as root instructor"
              />
            </RadioGroup>
          </FormControl>

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
                  onClick={register}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>
          <Link
            to="/auth/login"
            style={{ textAlign: "center" }}
            className="container-mt"
          >
            Login
          </Link>
        </div>
      </Paper>
    </Container>
  );
};
