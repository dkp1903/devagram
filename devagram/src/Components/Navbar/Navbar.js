import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Title from "../Auth/Title/Title";
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
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={classes.Navbar}>
        <div className={classes.NavContent}>
          <Title title="Devagram" />
          <div className={classes.Search}>
            <input
              type="text"
              value={searchText}
              onChange={setSearchText}
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
            <div
              className={(classes.Option, classes.Burger)}
              onClick={() => setOpen(!open)}
            >
              <FaHamburger style={{ color: "black" }} />
            </div>
          </div>
        </div>
        <div
          className={[classes.SmallScreen, open ? classes.Open : ""].join(" ")}
        >
          <div className={classes.SmallOption}>
            <Link to="/dashboard">
              <FaHome style={{ color: "black" }} />
              <span>Home</span>
            </Link>
          </div>
          <div className={classes.SmallOption}>
            <Link to="#">
              <FaInbox style={{ color: "black" }} />
              <span>Inbox</span>
            </Link>
          </div>
          <div className={classes.SmallOption}>
            <Link to="/feeds">
              <FaCompass style={{ color: "black" }} />
              <span>Explore-feeds</span>
            </Link>
          </div>
          <div className={classes.SmallOption}>
            <Link to="/jobsAndHack">
              <AiFillCode style={{ color: "black" }} />
              <span>jobs-hackathons</span>
            </Link>
          </div>
          <div className={classes.SmallOption}>
            <Link to="/profile">
              <CgProfile style={{ color: "black" }} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
