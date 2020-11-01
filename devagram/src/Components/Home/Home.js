import React from "react";

import classes from "./Home.module.css";

const Home = (props) => {
  document.title = `Devagram - ${props.title}`;
  return (
    <div className={classes.Home}>
      <header>
        <h1>Devagram</h1>
        <p>Instagram for Developers.</p>
      </header>
      <props.child />
    </div>
  );
};

export default Home;
