import React, { Fragment } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { type, value, change, name } = props;
  return (
    <Fragment>
      <label className={classes.label}>
        <input
          className={classes.Input}
          type={type}
          value={value}
          name={name}
          onChange={change}
          {...props}
        />
        <small className={classes.Small}>{name.toUpperCase()}</small>
      </label>
    </Fragment>
  );
};

export default Input;
