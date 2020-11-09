import React from "react";
import Navbar from "../Navbar/Navbar";
import Stories from "./Stories/Stories";
import classes from "./Dashboard.module.css";
import Post from "./Posts/Post";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main className={classes.Main}>
        <div className={classes.Left}>
          <Stories />
          <div className="posts">
            <Post />
          </div>
        </div>
        <div className={classes.Right}>small profile and other links</div>
      </main>
    </>
  );
};

export default Dashboard;
