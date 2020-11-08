import React from "react";
import { MdFavorite } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";
import "./Post.css";
//the whole div of "post" would be iterated in the and info come from the GET request form the /allPost from backend
function Post() {
  return (
    <div className="post-container">
      <div className="post">
        <a
          href="#w"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1603826254095-65b30e1f3bb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60")',
          }}
          className="post-image"
        >
          <div className="post-overlay">
            <span>
              <MdFavorite size="1.5em" />
              {Math.floor(Math.random() * 100)}
            </span>

            <span>
              <MdChatBubble size="1.5em" />
              {Math.floor(Math.random() * 100)}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Post;
