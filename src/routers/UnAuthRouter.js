import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

export const UnAuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
