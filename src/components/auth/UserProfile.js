import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser, updateUser } from "../../actions/auth";
import { useForms } from "../../hooks/useForms";
import { styleAuth } from "../../Styles/auth";

export const UserProfile = () => {
  const dispatch = useDispatch();

  const [formValues, HandleOnchange, setFormValues] = useForms({
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, lastName, userName, email, password, passwordConfirm } =
    formValues;

  useEffect(() => {
    getCurrentUser().then((response) => {
      setFormValues(response.data);
    });
  }, []);

  const saveChanges = (e) => {
    e.preventDefault();

    dispatch(updateUser(name, lastName, userName, email, password))
     
  };

  return (
    <Container component="main" maxWidth="md" justify="center">
      <div style={styleAuth.paper}>
        <Typography component="h1" variant="h5">
          User profile
        </Typography>
      </div>
      <form style={styleAuth.form} onSubmit={saveChanges}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="name"
              value={name}
              onChange={HandleOnchange}
              variant="outlined"
              fullWidth
              label="Type your name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="lastName"
              value={lastName}
              onChange={HandleOnchange}
              variant="outlined"
              fullWidth
              label="Type your lastname"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="userName"
              value={userName}
              onChange={HandleOnchange}
              variant="outlined"
              fullWidth
              label="Type your username"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="email"
              value={email}
              onChange={HandleOnchange}
              variant="outlined"
              fullWidth
              type="email"
              label="Type your email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="password"
              value={password || ""}
              onChange={HandleOnchange}
              variant="outlined"
              fullWidth
              type="password"
              label="Type your password"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="passwordConfirm"
              value={passwordConfirm || ""}
              onChange={HandleOnchange}
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
              size="large"
              color="primary"
              style={styleAuth.submit}
            >
              Save changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
