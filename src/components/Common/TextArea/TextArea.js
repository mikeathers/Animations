import React from "react";
import { TextArea as Text } from "semantic-ui-react";

const TextArea = props => {
  return (
    <Text
      className={props.className}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
};

export { TextArea };
