import React from "react";

import "./FormGroup.scss";

const FormGroup = props => {
  const inline = props.inline ? "form-group form-group-inline" : "form-group";
  const style = {
    flexBasis: `${props.flexBasis}%`,
    marginBottom: `${props.marginBottom}px`
  };
  return (
    <div style={style} className={inline}>
      {props.children}
    </div>
  );
};

export { FormGroup };
