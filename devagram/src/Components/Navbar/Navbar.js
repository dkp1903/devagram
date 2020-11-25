import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Title from "../Auth/Title/Title";
import {
  FaSearch,
  FaHome,
  FaInbox,
  FaCompass,
  FaHamburger,
  FaUsers,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

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
              <Link to="/connect">
                <FaUsers style={{ color: "black" }} />
              </Link>
            </div>
            <div className={classes.Option}>
              <Link to="/jobsAndHack">
                <AiFillCode style={{ color: "black" }} />
              </Link>
            </div>
            <div
              className={classes.Option}
              onClick={() => setOpenProfile(!openProfile)}
            >
              <CgProfile style={{ color: "black", cursor: "pointer" }} />
            </div>
            <div
              className={(classes.Option, classes.Burger)}
              onClick={() => setOpen(!open)}
            >
              <FaHamburger style={{ color: "black", cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div
          className={[
            classes.ProfileOptions,
            openProfile ? classes.Open : "",
          ].join(" ")}
        >
          <div className={classes.ProfileOption}>
            <NavLink to="/dashboard" activeClassName={classes.selected}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </div>
          <div className={classes.ProfileOption}>
            <NavLink to="#" activeClassName={classes.selected}>
              <FaSearch />
              <span>Search</span>
            </NavLink>
          </div>
          <div className={classes.ProfileOption}>
            <NavLink to="#" activeClassName={classes.selected}>
              <FaPlus />
              <span>Create Post</span>
            </NavLink>
          </div>
          <div className={classes.ProfileOption}>
            <NavLink to="/profile" activeClassName={classes.selected}>
              <FaUser />
              <span>Profile</span>
            </NavLink>
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
            <Link to="/connect">
              <FaUsers style={{ color: "black" }} />
              <span>Connect</span>
            </Link>
          </div>
          <div className={classes.SmallOption}>
            <Link to="/jobsAndHack">
              <AiFillCode style={{ color: "black" }} />
              <span>jobs-hackathons</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
