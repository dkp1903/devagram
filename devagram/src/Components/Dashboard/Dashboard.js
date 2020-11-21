import React from "react";
import Navbar from "../Navbar/Navbar";
import Stories from "./Stories/Stories";
import classes from "./Dashboard.module.css";
import Post from "./Posts/Post";

const Dashboard = () => {
  return (
    <div style={{ overflowX: "hidden", paddingTop: "4rem" }}>
      <Navbar />
      <main className={classes.Main}>
        <div className={classes.Left}>
          <Stories />
          <div className="posts" style={{ marginBottom: "2rem" }}>
            <Post />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
