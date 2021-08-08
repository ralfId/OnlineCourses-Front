import { Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { UserProfile } from "../components/auth/UserProfile";
import { AppNavbar } from "../components/ui/AppNavbar";
import { theme } from "../theme/theme";

export const AppRouter = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <AppNavbar/>
        <Grid>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={UserProfile} />

            <Route exact path="/" component={Login} />
          </Switch>
        </Grid>
      </ThemeProvider>
    </Router>
  );
};
