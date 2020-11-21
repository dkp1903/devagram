import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import Title from "../Auth/Title/Title";
import useHandleChange from "../Hooks/HandleInputChange";
import { FaSearch, FaHome, FaInbox, FaCompass } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [search, setText] = useHandleChange();

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <Link to="/dashboard">
          <Title title="Devagram" style={{ color: "black" }} />
        </Link>

        <div className={classes.Search}>
          <input
            type="text"
            value={search}
            onChange={setText}
            name="search"
            required
            placeholder="Search"
            aria-labelledby="label-search"
          />
          <Link to="#">
            <FaSearch style={{ color: "blue" }} />
          </Link>
        </div>
        <div className={classes.Options}>
          <div className={classes.Option}>
            <Link to="/dashboard">
              <FaHome style={{ color: "black" }} />
            </Link>
          </div>
          <div className={classes.Option}>
            <Link to="#">
              <FaInbox style={{ color: "black" }} />
            </Link>
          </div>
          <div className={classes.Option}>
            <Link to="/feeds">
              <FaCompass style={{ color: "black" }} />
            </Link>
          </div>
          <div className={classes.Option}>
            <Link to="/jobsAndHack">
              <AiFillCode style={{ color: "black" }} />
            </Link>
          </div>
          <div className={classes.Option}>
            <div className={classes.Profile}>
              <Link to="/profile">
                <img src="https://i.stack.imgur.com/l60Hf.png" alt="Profile" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
