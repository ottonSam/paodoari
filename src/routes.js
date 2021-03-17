import React from "react";
import { isAuthenticated } from "./services/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Homepage from './pages/Homepage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/" component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
