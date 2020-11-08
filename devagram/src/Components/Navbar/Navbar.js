import React from "react";
import classes from "./Navbar.module.css";
import Title from "../Auth/Title/Title";
import useHandleChange from "../Hooks/HandleInputChange";
import {
  FaSearch,
  FaHome,
  FaInbox,
  FaCompass,
  FaHamburger,
} from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [search, setText] = useHandleChange();

  return (
    <>
      <nav className={classes.Navbar}>
        <div className={classes.NavContent}>
          <Title title="Devagram" className={classes.Title} />
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
              <FaSearch size="1.2em" style={{ color: "#aaa" }} />
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
              <Link to="/profile">
                <CgProfile style={{ color: "black" }} />
              </Link>
            </div>
            <div className={(classes.Option, classes.Burger)}>
              <Link to="/profile">
                <FaHamburger style={{ color: "black" }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
