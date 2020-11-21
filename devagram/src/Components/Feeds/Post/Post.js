import React from "react";
import { MdFavorite } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import classes from "./Post.module.css";
//the whole div of "post" would be iterated in the and info come from the GET request form the /allPost from backend
function Post({ post }) {
  return (
    <div className={classes.post__container}>
      <div className={classes.post} style={{ height: "100%", width: "100%" }}>
        <img src={post.photoUrl} alt="feed__post" />
      </div>
      <div className={classes.post__overlay}>
        <span>
          <MdFavorite size="1.5em" color="white" />
          <span style={{ color: "white" }}>{post.likes}</span>
        </span>

        <span>
          <MdChatBubble size="1.5em" color="white" />
          <span style={{ color: "white" }}>{post.comments}</span>
        </span>
      </div>
    </div>
  );
}

export default Post;
