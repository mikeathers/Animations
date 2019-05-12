import React from "react";
import "./FormRow.scss";

const FormRow = props => {
  const style = {
    display: "flex",
    marginBottom: `${props.marginBottom}px`
  };
  return <div style={style}>{props.children}</div>;
};
export { FormRow };
