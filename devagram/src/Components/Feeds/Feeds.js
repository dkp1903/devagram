import React,{useEffect} from "react";
import Navbar from '../Navbar/Navbar'
import Posts from './Posts/Posts'
import './Feeds.css'
//information regarding the post will come from the file Posts.js having the the get requiret to /allPost 

const Feeds = () => {
    useEffect(()=>{

    },[])
  return (
    <>
      <Navbar /> 
      <div className="content-container">
          <div className="content">
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
              <Posts/>
          </div>
      </div>
    </>
  )
};

export default Feeds;
