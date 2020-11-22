import React, { Fragment } from "react";
import classes from "./DisplayStory.module.css";
import { stories as dummyStories } from "../dummyStory";
import Stories from "react-insta-stories";
import { Redirect, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DisplayStory = (props) => {
  /**
   * Fetch stories from redux store
   */

  const userId = +props.match.params.id;
  const user = dummyStories.find((story) => story.userId === userId);
  if (!user) {
    return <Redirect to="/not-found" />;
  }
  return (
    <Fragment>
      <div className={classes.DisplayStory}>
        <Link to="/dashboard" className={classes.CloseBtn}>
          <FaTimes />
        </Link>
        <div className={classes.StoryContainer}>
          <div className={classes.UserData}>
            <img src={user.authorProfile} alt="profile" />
            <p style={{ marginLeft: "0.5rem" }}>{user.author}</p>
          </div>
          <Stories
            stories={user.stories}
            height={"100%"}
            onAllStoriesEnd={() => console.log("ended")}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayStory;
