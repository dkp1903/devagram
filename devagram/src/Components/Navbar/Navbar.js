import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import Title from "../Auth/Title/Title";
import useHandleChange from "../Hooks/HandleInputChange";
import { FaSearch, FaHome, FaInbox, FaCompass } from "react-icons/fa";

const Navbar = (props) => {
  const [search, setText] = useHandleChange();

  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <Title title="Devagram" />
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
          <FaSearch />
        </div>
        <div className={classes.Options}>
          <div className={classes.Option}>
            <FaHome />
          </div>
          <div className={classes.Option}>
            <FaInbox />
          </div>
          <div className={classes.Option}>
            <FaCompass />
          </div>
          <div className={classes.Option}>
            <div className={classes.Profile}>
              <img src="https://i.stack.imgur.com/l60Hf.png" alt="Profile" />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
