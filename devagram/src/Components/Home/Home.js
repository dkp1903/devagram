import React from "react";

import classes from "./Home.module.css";
import Login from "../Auth/Login/Login";

const Home = () => {
  return (
    <div className={classes.Home}>
      <header>
        <h1>Devagram</h1>
        <p>Instagram from Developers.</p>
      </header>
      <Login />
    </div>
  );
};

export default Home;
