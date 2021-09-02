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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useForms } from "../../hooks/useForms";
import { styleAuth } from "../../Styles/auth";
import { registerUser } from "../../actions/auth";
import { CompareEquals, ValidateEmail } from "../../utils/validations";

export const Register = () => {
  const dispatch = useDispatch();

  const [validations, setValidations] = useState({ errors: {} });
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

  const checkValidations = () => {
    let errors = {};
    let isValid = true;

    if (!ValidateEmail(email)) {
      errors["email"] = "Email is not valid";
      isValid = false;
    }

    if (!CompareEquals(pass, passconfirm)) {
      errors["pass"] = "Passwords do not match";
      isValid = false;
    }


    setValidations({ ...validations, errors });
    return isValid;
  };
  const register = (e) => {
    e.preventDefault();

    if (checkValidations()) {
      dispatch(registerUser(name, lastname, username, email, pass, registerAs));
    }
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
            <RadioGroup row value={registerAs} onChange={handleChange}>
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

          <form style={styleAuth.form} onSubmit={register}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  value={name}
                  onChange={handleOnchange}
                  variant="outlined"
                  fullWidth
                  label="Type your name"
                  required
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
                  required
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
                  required
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
                  required
                  type="email"
                />
                <span style={{"color":"red"}}>{validations.errors["email"]}</span>
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
                  required
                />
                <span style={{"color":"red"}}>{validations.errors["pass"]}</span>

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
                  required
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
