import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Feeds from "./Components/Feeds/Feeds";
import JobsAndHacks from "./Components/JobsAndHacks/JobsAndHacks";

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
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/feeds" component={Feeds} />
        <Route path="/jobsAndHack" component={JobsAndHacks} />
      </Switch>
    </div>
  );
}

export default App;
