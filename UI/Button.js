import React, { useState } from "react";

import "./Button.css";

const Button = (props) => {
  const [isValid] = useState(true);
  
  const buttonClass = `button ${!isValid || props.isDisabled ? "invalid" : ""}`;
  
  return (
    <button
      type={props.type}
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
