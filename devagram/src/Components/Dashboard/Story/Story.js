import React, { Fragment } from "react";
import classes from "./Story.module.css";

const Story = (props) => {
  return (
    <Fragment>
      <div
        className={[
          classes.Story,
          props.story.isSeen ? classes.Seen : classes["Not-seen"],
        ].join(" ")}
      >
        <div className={classes.Profile}>
          <img src={props.story.authorProfile} alt="Story" />
        </div>
        <p>{props.story.author}</p>
      </div>
    </Fragment>
  );
};

export default Story;
