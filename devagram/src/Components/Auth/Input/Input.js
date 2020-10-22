import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = ({ type, placeholder, value, change, name }) => {
  return (
    <Fragment>
      <input
        className={classes.Input}
        type={type}
        value={value}
        name={name}
        onChange={change}
        placeholder={placeholder}
        required
      />
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Input;
