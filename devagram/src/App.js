import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import { connect } from "react-redux";

import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Feeds from "./Components/Feeds/Feeds";
import JobsAndHacks from "./Components/JobsAndHacks/JobsAndHacks";
import DisplayStory from "./Components/Dashboard/Stories/DisplayStory/DisplayStory";
import NotFound from "./Components/NotFound/NotFound";
import Connection from "./Components/Connection/Connection";
import { checkAuthState } from "./actions";
import Loader from "./Components/Loader/Loader";

function App({ checkAuthState, auth: { loading } }) {
  useEffect(() => {
    checkAuthState();
  }, [checkAuthState]);

  return (
    <div className="App">
      {loading ? (
        <div className="spinner">
          <Loader />
        </div>
      ) : (
        <Switch>
          <Route
            path="/"
            component={() => <Home child={Login} title="Login" />}
            exact
          />
          <Route
            path="/login"
            component={() => <Home child={Login} title="Login" />}
          />
          <Route
            path="/signup"
            component={() => <Home child={Signup} title="Sign Up" />}
          />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/feeds" component={Feeds} />
          <PrivateRoute path="/jobsAndHack" component={JobsAndHacks} />
          <PrivateRoute path="/connect" component={Connection} />
          <PrivateRoute path="/story/:user/:id" component={DisplayStory} />
          <PrivateRoute component={NotFound} />
        </Switch>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthState: () => dispatch(checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
