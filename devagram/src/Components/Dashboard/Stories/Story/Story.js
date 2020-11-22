import React, { Fragment } from "react";
import classes from "./Story.module.css";
import { Link } from "react-router-dom";

const Story = (props) => {
  return (
    <Fragment>
      <Link
        to={`/story/${props.user.author}/${props.user.userId}`}
        style={{ textDecoration: "none" }}
        className={[
          classes.Story,
          props.user.isSeen ? classes.Seen : classes["Not-seen"],
        ].join(" ")}
      >
        <div className={classes.Profile}>
          <img src={props.user.authorProfile} alt="Story" />
        </div>
        <p>{props.user.author}</p>
      </Link>
    </Fragment>
  );
};

export default Story;
