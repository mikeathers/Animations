import React from "react";

import "./Label.scss";

const Label = props => {
  const style = {
    width: `${props.width}%`,
    marginTop: `${props.marginTop}px`
  };
  return (
    <p style={style} className="label">
      {props.text}
    </p>
  );
};

export { Label };
