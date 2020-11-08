import React from "react";
import classes from "./HackathonCard.module.css";

function HackathonCard({ title, information, imgURL }) {
  // sample data
  const sampleInfo = {
    imgURL:
      "https://yt3.ggpht.com/a/AGF-l795C8OzY_enwlxE7n5CAdWlqJ_dNkfUb68HPg=s900-c-k-c0xffffffff-no-rj-mo",
    information:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus soluta a laborum corrupti nihil asperiores commodi mollitia! Distinctio, reiciendis error aspernatur quidem blanditiis officiis ex hic sit voluptatem nobis placeat",
    title: "Imagine Cup",
  };

  return (
    <div className={classes.hackathoncard}>
      <img src={sampleInfo.imgURL} alt={title} />
      <h6>{sampleInfo.title}</h6>
      <p>{sampleInfo.information}</p>
      {/* using BEM convention for naming classes*/}
      <div className={classes.hackathoncard__buttons}>
        <button>Participate</button>
      </div>
    </div>
  );
}

export default HackathonCard;
