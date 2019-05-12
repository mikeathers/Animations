import React from "react";
import "./Message.scss";
const Message = props => {
  const { show, error, message, marginRight, marginTop } = props;
  const classStyle = error ? "message__error" : "message__success";
  const style = {
    marginRight: `${marginRight}px`,
    marginTop: `${marginTop}px`,
    display: "flex",
    justifyContent: props.justifyContent
  };
  return show ? (
    <div style={style} className="message">
      <p className={classStyle}>
        {error ? message : "Task completed successfully."}
      </p>
    </div>
  ) : null;
};

export { Message };
