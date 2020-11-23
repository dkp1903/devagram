import React, { Fragment, useState, useEffect } from "react";
import "./Connection.css";
import Navbar from "../Navbar/Navbar";
import { users } from "./fakeUsers";

function Connection() {
  const [follow, setFollow] = useState([]);
  useEffect(() => {
    /**
     * Fetch popular users here
     */
    setFollow(users);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="connect">
        {follow.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.profileUrl} className="card-image" alt={user.name} />
            <div className="card-title">{user.name}</div>

            <div className="card-desc">{user.description}</div>
            <div className="card-actions">
              <button type="button" className="card-action-readMore">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Connection;
