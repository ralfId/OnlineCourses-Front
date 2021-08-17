import { Grid } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { UserProfile } from "../components/auth/UserProfile";
import { CreateCourse } from "../components/courses/CreateCourse";
import { AppNavbar } from "../components/menu/AppNavbar";

export const AuthRouter = () => {
  return (
    <>
      <AppNavbar />
      <Grid>
        <Switch>
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path='/create' component={CreateCourse}/>

          <Redirect to="/create" />
        </Switch>
      </Grid>
    </>
  );
};
