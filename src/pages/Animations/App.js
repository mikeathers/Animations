import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "./node_modules/components/Menu/Menu";
import Animations from "";
import "./App.scss";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Switch>
          <Route path={"/private/animations"} />
        </Switch>
      </div>
    );
  }
}
