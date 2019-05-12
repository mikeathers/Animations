import React from "react";

import { Col } from "react-bootstrap";

const sCol = props => <Col {...props}>{props.children}</Col>;

export { sCol as Col };
