import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";

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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
