import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HackthonCard from "./HackathonCard/HackathonCard";
// import axios from "axios"; // import this fetching posts

import classes from "./JobsAndHacks.module.css";

function JobsAndHacks() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    /**
     * Fetch stories here
     */
    /** 
      axios
        .get("https://examples.com/example.json")
        .then((response) => {
          // handle success
          // setCards(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error); 
        });
    */
    // Setting Cards
    setCards([...Array(10)]); //remove this when axios is added
  }, []);
  return (
    <>
      <Navbar />
      <div className={classes.jobsAndHacks}>
        {cards.map((card, index) => (
          <HackthonCard key={index} />
        ))}
      </div>
    </>
  );
}

export default JobsAndHacks;
