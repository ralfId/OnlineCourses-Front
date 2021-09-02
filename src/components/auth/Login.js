import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { styleAuth } from "../../Styles/auth";
import { useForms } from "../../hooks/useForms";
import { loginUser } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ValidateEmail } from "../../utils/validations";

export const Login = () => {
  const dispatch = useDispatch();
  const [validations, setValidations] = useState({ errors: {} });

  const [formValues, handleOnChange] = useForms({
    email: "ralf_raid@yopmail.com",
    password: "Password@123",
  });

  const { email, password } = formValues;

  const checkValidations = () => {

    let errors = {};
    let isValid = true;

    if (!ValidateEmail(email)) {
      errors["email"] = "Email is not valid";
      isValid = false;
    }

    setValidations({...validations, errors})
    return isValid;
  };
  const userLogin = (e) => {
    e.preventDefault();

    const x = checkValidations();
    if (x) {
      dispatch(loginUser(formValues));
    }
  };

  return (
    <Container maxWidth="xs" className="container-mt4">
      <Paper elevation={3} className="container-px container-py">
        <div style={styleAuth.paper}>
          <Avatar style={styleAuth.avatar}>
            <LockIcon style={styleAuth.icon} />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Login
          </Typography>
          <form onSubmit={userLogin}>
            <TextField
              name="email"
              value={email}
              onChange={handleOnChange}
              required
              variant="outlined"
              fullWidth
              type="email"
              label="Input email"
              margin="normal"
            />
            <span style={{"color":"red"}}>{validations.errors["email"]}</span>
            <TextField
              name="password"
              value={password}
              onChange={handleOnChange}
              required
              variant="outlined"
              fullWidth
              type="password"
              label="Input password"
              margin="normal"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={styleAuth.submit}
            >
              Login
            </Button>
          </form>
          <Link
            to="/auth/register"
            style={{ textAlign: "center" }}
            className="container-mt"
          >
            Create new account
          </Link>
        </div>
      </Paper>
    </Container>
  );
};
