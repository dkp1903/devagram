import React from "react";
import { FaCaretDown } from "react-icons/fa";
import classes from "./ToggleButton.module.css";

const ToggleButton = ({ onChange, selectedValue }) => {
  return (
    <div className={classes.ToggleButton}>
      <FaCaretDown className={classes.caret} />
      <select value={selectedValue} onChange={onChange}>
        <option value="all">All</option>
        <option value="job">jobs</option>
        <option value="hackathon">Hackathons</option>
      </select>
    </div>
  );
};

export default ToggleButton;
