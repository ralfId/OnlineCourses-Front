import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { SnackBarApp } from "../components/ui/SnackBar";
import { theme } from "../theme/theme";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { UnAuthRouter } from "./UnAuthRouter";

export const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <SnackBarApp />
          <Switch>
            <PublicRoute
              path="/auth"
              isAuthenticated={isAuthenticated}
              component={UnAuthRouter}
            />
            <PrivateRoute
              path="/"
              isAuthenticated={isAuthenticated}
              component={AuthRouter}
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};
