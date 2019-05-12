import React from "react";
import { Button } from "semantic-ui-react";
import "./Button.scss";
const sButton = props => {
  const style = {
    backgroundColor: props.type === "danger" && "#ea5a5a",
    marginRight: `${props.marginright}px`,
    marginLeft: `${props.marginLeft}px`
  };
  return <Button style={style} {...props} size="small" />;
};

export { sButton as Button };
