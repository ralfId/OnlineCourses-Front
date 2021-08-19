import { ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { SnackBarApp } from "../components/ui/SnackBar";
import { theme } from "../theme/theme";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { UnAuthRouter } from "./UnAuthRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { isCheckin, userName } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (isCheckin) {
    return <h2>Loading...</h2>;
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <SnackBarApp />
          <Switch>
            <PublicRoute
              path="/auth"
              isAuthenticated={!!userName}
              component={UnAuthRouter}
            />
            <PrivateRoute
              path="/"
              isAuthenticated={!!userName}
              component={AuthRouter}
            />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};
