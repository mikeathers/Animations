import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "actions";

class Home extends Component {
  render() {
    const user = {
      id: 1,
      name: "test",
      isAuthenticated: true
    };
    return (
      <div>
        <h1>React Boiler Plate</h1>
        <button onClick={() => this.props.loginUser(user)}>auth</button>
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(Home);
