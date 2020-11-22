import React, { Fragment } from "react";
import "./Post.css";
import "bootstrap/dist/css/bootstrap.css";
import { BsHeart, BsChat } from "react-icons/bs";
import { FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

const Post = (props) => {
  return (
    <Fragment>
      <div className="allPosts">
        <div className="post">
          <div className="Story img">
            <img src="https://picsum.photos/seed/picsum/200/300" alt=""></img>{" "}
            <b className="profile">Shankhanil</b>
          </div>
          <div className="desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1602526430780-782d6b1783fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="post"
            />
          </div>

          <div className="reaction">
            <div className="row">
              <div className="left">
                <div className="type">
                  <BsHeart className="heart" />
                </div>
                <div className="type">
                  <BsChat className="comment" />
                </div>
                <div className="type">
                  <FaRegPaperPlane className="send" />
                </div>
              </div>
              <div className="type">
                <FaRegBookmark className="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
