import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const { type, value, change, name } = props;
  return (
    <>
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
    </>
  );
};

export default Input;
