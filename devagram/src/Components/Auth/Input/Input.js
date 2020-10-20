import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <Fragment>
      <input className={classes.Input} type={type} placeholder={placeholder} />
    </Fragment>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
