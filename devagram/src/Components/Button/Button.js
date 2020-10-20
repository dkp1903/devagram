import React, { Fragment } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        className={[classes.Button, classes[props.btnType]].join(" ")}
        type={props.type}
      >
        {" "}
        {props.children}{" "}
      </button>
    </Fragment>
  );
};

export default Button;
