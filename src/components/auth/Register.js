import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { styleAuth } from "../../Styles/auth";

export const Register = () => {
  return (
    <Container component="main" maxWidth="md"  justify="center">
      <div style={styleAuth.paper}>
        <Typography component="h1" variant="h5">
          Create new user account
        </Typography>
        <form style={styleAuth.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="Name"
                variant="outlined"
                fullWidth
                label="Type your name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="Lastname"
                variant="outlined"
                fullWidth
                label="Type your lastname"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="UserName"
                variant="outlined"
                fullWidth
                label="Type your username"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Type your email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="pass"
                variant="outlined"
                fullWidth
                type="password"
                label="Type your password"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="passConfirm"
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
