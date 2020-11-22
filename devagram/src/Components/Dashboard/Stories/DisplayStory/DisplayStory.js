import React, { Fragment } from "react";
import classes from "./DisplayStory.module.css";
import { stories as dummyStories } from "../dummyStory";
import Stories from "react-insta-stories";
import { Redirect, Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const DisplayStory = (props) => {
  /**
   * Fetch stories from redux store
   */

  const userId = +props.match.params.id;
  const userIndex = dummyStories.findIndex((story) => story.userId === userId);
  const user = dummyStories[userIndex];
  const [currentUser, setCurrentUser] = useState(user);
  const [index, setIndex] = useState(userIndex);
  console.log("re-render");
  const gotoNextUser = () => {
    setCurrentUser(dummyStories[index + 1]);
    setIndex((prevIndex) => prevIndex + 1);
    dummyStories[index + 1]
      ? props.history.push(
          `/story/${dummyStories[index + 1].author}/${
            dummyStories[index + 1].userId
          }`
        )
      : props.history.push("/dashboard");
  };

  return (
    <Fragment>
      {currentUser ? (
        <div className={classes.DisplayStory}>
          <Link to="/dashboard" className={classes.CloseBtn}>
            <FaTimes />
          </Link>
          <div className={classes.StoryContainer}>
            <Stories
              stories={currentUser.stories}
              height={"100%"}
              onAllStoriesEnd={gotoNextUser}
              currentIndex={0}
            />
          </div>
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </Fragment>
  );
};

export default DisplayStory;
