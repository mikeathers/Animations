import React, { Component } from "react";
import { Container, Row, Col } from "components/Common";
import { Spring, config, Trail, animated, Transition } from "react-spring";
import "./Animations.scss";
export default class Animations extends Component {
  state = { show: false };
  componentDidMount() {
    this.setState({ show: true });
  }
  navigate = () => {
    this.setState({ show: false });
    setTimeout(() => this.props.history.push("/private/other"), 1500);
  };
  render() {
    const { show } = this.state;
    return (
      <div className="animations">
        {/* <Transition
          items={show}
          from={{ transform: "translateY(100px)", opacity: 0 }}
          enter={{ transform: "translateY(0px)", opacity: 1 }}
          leave={{ transform: "translateX(100px)", opacity: 0 }}
          delay={200}
        >
          {show =>
            show &&
            (props => ( */}
        <Container fluid>
          <Row>
            <Col>
              <p onClick={this.navigate}>Leave</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 200 : 600}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--pink"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={400}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--pink"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 600 : 200}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--pink"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 200 : 600}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--purple"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={400}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--purple"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 600 : 200}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--purple"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 200 : 600}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--blue"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={400}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--blue"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Transition
                    items={show}
                    from={{ opacity: 0, transform: "translate3d(100%,0%,0)" }}
                    enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
                    leave={{
                      opacity: 0,
                      transform: "translate3d(0,100%,0)"
                    }}
                    delay={show ? 600 : 200}
                  >
                    {show =>
                      show &&
                      (props => (
                        <div
                          style={props}
                          className="animations__box animations__box--blue"
                        >
                          <h1>Hello</h1>
                          <h2>Michael</h2>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* ))
          }
        </Transition> */}
      </div>
    );
  }
}
