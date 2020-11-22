import React, { useState } from "react";
import Details from "./Details/Details";
import classes from "./HackathonCard.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

function HackathonCard({ card }) {
  // function on() {
  //   document.getElementsByClassName("Details_outer__L9Klp")[0].style.display =
  //     "block";
  // }
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <Details card={card} click={() => setModalOpen(false)} />
      ) : null}
      <div className={classes.hackathoncard} style={{}}>
        <img src={card.imageUrl} alt={card.title} />
        <h6>{card.title}</h6>
        <p>{card.description}</p>
        <p>{card.type}</p>
        {/* using BEM convention for naming classes*/}
        <button
          className={classes.learn_more}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Learn more about Imagine Cup <BsBoxArrowUpRight />
        </button>
        <div className={classes.hackathoncard__buttons}>
          <button>Participate</button>
        </div>
      </div>
    </>
  );
}

export default HackathonCard;
