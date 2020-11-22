import React from "react";
import classes from "./ShowPost.module.css";
import { BsHeart, BsChat } from "react-icons/bs";
import { FaRegPaperPlane, FaRegBookmark, FaTimes } from "react-icons/fa";

const ShowPost = ({ post, close }) => {
  return (
    <div className={classes.ShowPost}>
      <div className={classes.backdrop} onClick={close}></div>
      <div className={classes.post}>
        <FaTimes className={classes.closeBtn} onClick={close} />
        <div className={classes.image}>
          <img src={post.photoUrl} alt="post" />
        </div>
        <div className={classes.detail}>
          <div className={classes.user}>
            <img
              height="40"
              width="40"
              src="https://avatars2.githubusercontent.com/u/52067783?s=460&u=212f06bdac348e4ac59204857029ed7d27a2466b&v=4"
              alt="dp"
            />
            <span>{post.user}</span>
          </div>
          <div className={classes.comments}>Comments</div>
          <div className={classes.actions}>
            <div className="left">
              <BsHeart className="heart" />
              <BsChat className="comment" style={{ margin: "0 0.3rem" }} />
              <FaRegPaperPlane className="send" />
            </div>
            <FaRegBookmark className="bookmark" />
          </div>
          <p style={{ marginLeft: "1rem" }}> {post.likes} Likes </p>
          <div className={classes.addComment}>
            <input type="text" placeholder="Add comment" />
            <button>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
