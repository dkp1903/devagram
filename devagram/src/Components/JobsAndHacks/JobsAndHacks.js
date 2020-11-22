import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HackthonCard from "./HackathonCard/HackathonCard";
import { jobsHacks } from "./dummyData";
import classes from "./JobsAndHacks.module.css";
import ToggleButton from "./ToggleButton/ToggleButton";
// import axios from "axios"; // import this fetching posts

function JobsAndHacks() {
  const [cards, setCards] = useState([]);
  const [type, setType] = useState("all");

  useEffect(() => {
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
    setCards(jobsHacks); //remove this when axios is added
  }, []);

  const changeType = (type) => {
    const filteredCards = jobsHacks.filter((card) => {
      if (type.toLowerCase() === "all") return true;
      else return card.type.toLowerCase() === type.toLowerCase();
    });
    setCards(filteredCards);
  };

  return (
    <>
      <Navbar />
      <ToggleButton
        selectedValue={type}
        onChange={(e) => {
          setType(e.target.value);
          changeType(e.target.value);
        }}
      />
      <div className={classes.jobsAndHacks}>
        {cards.map((card, index) => (
          <HackthonCard card={card} key={index} />
        ))}
      </div>
    </>
  );
}

export default JobsAndHacks;
