import React from "react";
import { Avatar, Button, Container, TextField, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { styleAuth } from "../../Styles/auth";

export const Login = () => {
  return (
    <Container maxWidth="xs">
      <div style={styleAuth.paper}>
        <Avatar style={styleAuth.avatar}>
          <LockIcon style={styleAuth.icon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Login
        </Typography>
        <form>
            <TextField variant="outlined" fullWidth label="Input email" margin="normal"/>
            <TextField variant="outlined" fullWidth type="password" label="Input password" margin="normal"/>

            <Button type="submit" fullWidth variant="contained" color="primary" style={styleAuth.submit}>
                Login
            </Button>
        </form>
      </div>
    </Container>
  );
};
