import React, { Fragment, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import ShowPost from "../../Shared/ShowPost/ShowPost";
import classes from "./Post.module.css";
//the whole div of "post" would be iterated in the and info come from the GET request form the /allPost from backend
const Post = ({ post }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {open && <ShowPost post={post} close={() => setOpen(false)} />}
      <div className={classes.post__container} onClick={() => setOpen(!open)}>
        <div className={classes.post} style={{ height: "100%", width: "100%" }}>
          <img src={post.photoUrl} alt="feed__post" />
        </div>
        <div className={classes.post__overlay}>
          <span style={{ pointerEvents: "none" }}>
            <MdFavorite size="1.5em" color="white" />
            <span style={{ color: "white" }}>{post.likes}</span>
          </span>

          <span style={{ pointerEvents: "none" }}>
            <MdChatBubble size="1.5em" color="white" />
            <span style={{ color: "white" }}>{post.comments}</span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
