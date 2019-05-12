import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <NavLink to="/private/animations">
          <h3>Animations</h3>
        </NavLink>
        <NavLink to="/private/other">
          <h3>Other</h3>
        </NavLink>
      </div>
    );
  }
}
