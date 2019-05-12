import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Menu from "components/Menu/Menu";
import Animations from "containers/Animations/Animations";
import OtherPage from "containers/OtherPage/OtherPage";
import "./App.scss";

export default class App extends Component {
  componentDidMount() {
    if (this.props.history.location.pathname === "/private") {
      this.props.history.push("/private/animations");
    }
  }
  render() {
    return (
      <div className="app">
        <Menu />
        <div className="app__content">
          <Switch>
            <Route path={"/private/animations"} component={Animations} />
            <Route path={"/private/other"} component={OtherPage} />
          </Switch>
        </div>
      </div>
    );
  }
}
