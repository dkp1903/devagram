import React from "react";
import { MdFavorite } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Posts.css";

//the whole div of "post" would be iterated in the and info come from the GET request form the /allPost from backend
const Posts = ({ photoUrl, likes, comments }) => {
  return (
    <div className="post-container">
      <div className="post">
        <Link
          to="/feeds"
          style={{
            backgroundImage: `url(${photoUrl})`,
          }}
          className="post-image"
        ></Link>
        <div className="post-overlay">
          <span>
            <MdFavorite />
            {likes}
          </span>

          <span>
            <MdChatBubble />
            {comments}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
