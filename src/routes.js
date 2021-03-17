import React from "react";
import { isAuthenticated } from "./services/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Singup from './pages/Singup';
import Homepage from './pages/Homepage';
import MeusPedidos from "./pages/MeusPedidos";

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
      <Route exact path="/singup" component={Singup} />
      <PrivateRoute path="/" exact component={Homepage} />
      <PrivateRoute path="/meuspedidos" component={MeusPedidos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
