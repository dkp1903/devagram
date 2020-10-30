import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Posts from "./Posts/Posts";
import "./Feeds.css";
import { feeds } from "./fakeFeed";

//information regarding the post will come from the file Posts.js having the the get require to /allPost

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /**
     * Here we will fetch all posts from backend
     */
    const allPosts = feeds;
    setPosts(allPosts);
  }, []);
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="content">
          {posts.map((post) => (
            <Posts
              key={post.id}
              photoUrl={post.photoUrl}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feeds;
