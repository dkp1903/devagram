import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Profile.module.css";
import Button from "../Button/Button";
import { FaCog } from "react-icons/fa";
function Profile() {
  return (
    <div style={{ backgroundColor: "#eff7eb" }}>
      <Navbar />
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
            borderBottom: "1px solid black",
          }}
        >
          <div>
            <img
              style={{
                height: "160px",
                width: "160px",
                borderRadius: "80px",
                margin: "10px 10px",
              }}
              src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Darshil Patel</h3>
              <Button btnType="EditProfile" children="Edit Profile" />
              <FaCog />
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginRight: "10px",
              }}
            >
              <p>
                {" "}
                <b>40</b> Posts
              </p>
              <p>
                {" "}
                <b>40</b> Followers
              </p>
              <p>
                {" "}
                <b>40</b> Following
              </p>
            </div>
            <br />
            <div className="bio">
              <h5>MERN stack developer</h5>
              <h5>Ex-Amazon,Ex-Hotstar</h5>
            </div>
          </div>
        </div>
        <div className={classes.gallery}>
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1574694413209-16c197d7bd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1552985247-03b1fddb53d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1574694413209-16c197d7bd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1552985247-03b1fddb53d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1574694413209-16c197d7bd61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1584307833174-a3bbb76ab367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
          <img
            className={classes.image}
            src="https://images.unsplash.com/photo-1552985247-03b1fddb53d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
