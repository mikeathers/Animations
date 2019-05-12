import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import App from "pages/App/App";
import NotFound from "pages/NotFound/NotFound";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default class AppRoutes extends Component {
  render() {
    return (
      <Switch>
        <PublicRoute path="/" component={Home} exact={true} />
        <PrivateRoute path="/private" component={App} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
