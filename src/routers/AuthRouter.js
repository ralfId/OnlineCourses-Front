import { Grid } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserProfile } from "../components/auth/UserProfile";
import { AppNavbar } from "../components/menu/AppNavbar";

export const AuthRouter = () => {
  return (
    <>
      <AppNavbar />
      <Grid>
        <Switch>
          <Route exact path="/profile" component={UserProfile} />

          <Redirect to="/profile" />
        </Switch>
      </Grid>
    </>
  );
};
