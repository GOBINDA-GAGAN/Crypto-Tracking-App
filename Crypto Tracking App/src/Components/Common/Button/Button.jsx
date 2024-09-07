import React from "react";
import "./Button.css";

const Button = ({ text,onClick,outLine }) => {
  return <div className={outLine ?" btn":"btn-outline"} onClick={onClick} >{text}</div>;
};

export default Button;
