import React, { useState } from "react";
import Details from "./Details/Details";
import classes from "./HackathonCard.module.css";
import { BsBoxArrowUpRight } from "react-icons/bs";

function HackathonCard({ title, information, imgURL }) {
  // sample datass
  const sampleInfo = {
    imgURL:
      "https://yt3.ggpht.com/a/AGF-l795C8OzY_enwlxE7n5CAdWlqJ_dNkfUb68HPg=s900-c-k-c0xffffffff-no-rj-mo",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus soluta a laborum corrupti nihil asperiores commodi mollitia! Distinctio, reiciendis error aspernatur quidem blanditiis officiis ex hic sit voluptatem nobis placeat",
    title: "Imagine Cup",
  };

  // function on() {
  //   document.getElementsByClassName("Details_outer__L9Klp")[0].style.display =
  //     "block";
  // }
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? <Details click={() => setModalOpen(false)} /> : null}
      <div className={classes.hackathoncard}>
        <img src={sampleInfo.imgURL} alt={title} />
        <h6>{sampleInfo.title}</h6>
        <p>{sampleInfo.information}</p>
        {/* using BEM convention for naming classes*/}
        <button
          class={classes.learn_more}
          onClick={() => {
            setModalOpen(true);
            console.log("Clicked!");
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
