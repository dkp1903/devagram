import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Post from "./Post/Post";
// import axios from "axios"; // import this fetching posts
import classes from "./Feeds.module.css";
import { feeds } from "./fakeFeed";
// information regarding the post will come from the file Posts.js having the the get request to /api/post

const Feeds = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    /**
     * Fetch stories here
     */
    /** 
      axios
        .get("https://examples.com/example.json")
        .then((response) => {
          // handle success
          // setPosts(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    */
    // Setting Posts
    setPosts(feeds); //remove this when axios is added
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={classes.content__container}
        style={{ paddingTop: "3rem" }}
      >
        <div className={classes.content}>
          {posts.map((post, index) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feeds;
