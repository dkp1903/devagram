import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./Home.module.css";

const Home = (props) => {
  if (props.auth.isAuth) {
    return <Redirect to="/dashboard" />;
  }

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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
