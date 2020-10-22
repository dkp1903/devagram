import React from "react";
import PropTypes from "prop-types";
import classes from "./Title.module.css";

const Title = ({ title }) => {
  return <h1 className={classes.Title}> {title} </h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
