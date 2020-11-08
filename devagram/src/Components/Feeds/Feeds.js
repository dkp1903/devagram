import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Post from "./Post/Post";
// import axios from "axios"; // import this fetching posts
import "./Feeds.css";
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
    setPosts([...Array(10)]); //remove this when axios is added
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="content">
          {posts.map((post, index) => (
            <Post key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feeds;
