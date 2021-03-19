import React from "react";
import { isAuthenticated } from "./services/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from './pages/Login';
import Singup from './pages/Singup';
import Homepage from './pages/Homepage';
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";

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
      <PrivateRoute path="/pedidos" exact component={Pedidos} />
      <PrivateRoute path="/perfil" component={Perfil} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
