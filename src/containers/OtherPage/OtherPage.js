import React, { Component } from "react";
import { Container, Row, Col } from "components/Common";
import {
  Spring,
  config,
  Trail,
  animated,
  Transition,
  Keyframes
} from "react-spring";
import delay from "delay";

const Anime = Keyframes.Spring(async next => {
  // None of this will cause React to render, the component renders only once :-)
  while (true) {
    await next({
      from: { opacity: 0, width: 50, height: 50, background: "black" },
      opacity: 1,
      width: 80,
      height: 80,
      background: "tomato"
    });
    await next({
      from: { left: "0%" },
      left: "70%",
      background: "seagreen"
    });
    next({
      from: { top: "0%" },
      top: "40%",
      background: "plum",
      config: config.wobbly
    });
    await delay(2000); // don't wait for the animation above to finish, go to the next one in 2s
    await next({ left: "0%", background: "hotpink" });
    // await next({
    //   top: "0%",
    //   background: "teal"
    // });
    // await next({
    //   opacity: 0,
    //   width: 40,
    //   height: 40,
    //   background: "black"
    // });
  }
});

export default class OtherPage extends Component {
  state = {
    text: "",
    show: false,
    items: [
      { component: <p>hello</p>, key: 0 },
      { component: <p>hello</p>, key: 1 },
      { component: <p>hello</p>, key: 2 },
      { component: <p>hello</p>, key: 3 }
    ]
  };
  componentDidMount() {
    this.setState({ show: true });
  }
  navigate = () => {
    this.setState({ show: false });
    setTimeout(() => this.props.history.push("/private/animations"), 1500);
  };

  add = () => {
    const item = {
      component: <p>{this.state.text}</p>,
      key: this.state.items.length + 1
    };
    this.setState({ items: this.state.items.concat(item) });
  };

  render() {
    const { show, items } = this.state;
    return (
      <div className="animations">
        <Container fluid>
          <Row>
            <Col>
              <p onClick={this.navigate}>Leave</p>
              <input
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
              <button onClick={this.add}>Add</button>
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
                          <Trail
                            items={items}
                            keys={item => item.key}
                            from={{
                              opacity: 0,
                              transform: "translate3d(-100%,0,0)"
                            }}
                            to={{
                              opacity: 1,
                              transform: "translate3d(0%,0,0)"
                            }}
                            delay={1000}
                            config={config.stiff}
                          >
                            {item => props => (
                              <div style={props}>{item.component}</div>
                            )}
                          </Trail>
                        </div>
                      ))
                    }
                  </Transition>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  background: "aquamarine",
                  padding: 10
                }}
              >
                <Anime native>
                  {props => (
                    <animated.div
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        ...props
                      }}
                    />
                  )}
                </Anime>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
