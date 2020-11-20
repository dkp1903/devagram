import React from "react";
import classes from "./Details.module.css";
import "bootstrap/dist/css/bootstrap.css";

const Details = ({ click }) => {
  return (
    <div className={classes.outer} onClick={() => click()}>
      <div className={classes.container}>
        <center>
          <img
            className={classes.event_logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNjVQBQoClbHF1pSJ4oRdXPZ59bidTgQ9OZg&usqp=CAU"
          ></img>
          <h1 className={classes.event_name}>Imagine Cup</h1>
        </center>

        <div className={classes.list}>
          <ul>
            <li>
              Imagine Cup is an annual competition sponsored and hosted by
              Microsoft Corp. which brings together student developers worldwide
              to help resolve some of the world's toughest challenges.
            </li>
            <li>Registration + Submission Dealine : Now – January 2021</li>
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
