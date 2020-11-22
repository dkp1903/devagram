import React from "react";
import classes from "./Details.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaTimes } from "react-icons/fa";

const Details = ({ click, card }) => {
  return (
    <div className={classes.outer} onClick={click}>
      <div className={classes.container}>
        <FaTimes className={classes.closeBtn} />
        <img
          alt="logo"
          className={classes.event_logo}
          src={card.imageUrl}
        ></img>
        <h1 style={{ textAlign: "center" }} className={classes.event_name}>
          {card.title}
        </h1>

        <div className={classes.list}>
          <ul>
            <li>
              Imagine Cup is an annual competition sponsored and hosted by
              Microsoft Corp. which brings together student developers worldwide
              to help resolve some of the world's toughest challenges.
            </li>
            <li>Registration + Submission Deadline : Now – January 2021</li>
            <li>World Finals : March 2021</li>
            <li>
              Why you should enter ? The 19th annual Imagine Cup is more than
              just a competition for students—you can work with friends (and
              make new ones!), network with professionals, gain new skills, make
              a difference in the world, and have the chance to win great
              prizes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
