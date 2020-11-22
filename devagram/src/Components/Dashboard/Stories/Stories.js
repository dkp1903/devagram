import React, { useEffect, useRef, useState } from "react";
import Story from "./Story/Story";
import { stories as dummyStories } from "./dummyStory";
import classes from "./Stories.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Stories = (props) => {
  const [stories, setStories] = useState([]);
  const storyRef = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    /**
     * Here i am using dummy stories but we need to fetch stories here from Database and add to redux store
     */
    const dummyData = dummyStories;
    setStories(dummyData);
  }, []);

  const onScrollRight = () => {
    storyRef.current.scrollLeft += storyRef.current.offsetWidth;
    setScrollLeft((prev) => prev + storyRef.current.offsetWidth);
  };
  const onScrollLeft = () => {
    storyRef.current.scrollLeft -= storyRef.current.offsetWidth;
    setScrollLeft((prev) => prev - storyRef.current.offsetWidth);
  };
  const checkScroll = () => {
    return (
      scrollLeft.toFixed(0) ===
      (+storyRef.current?.scrollWidth - +storyRef.current?.offsetWidth).toFixed(
        0
      )
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <div ref={storyRef} className={classes.Stories}>
        {stories.map((user) => (
          <Story key={user.userId} story={user.stories} user={user} />
        ))}
      </div>
      <div
        style={{
          display: scrollLeft === 0 ? "none" : "block",
        }}
        className={[classes["Scroll-arrow"], classes["Left-arrow"]].join(" ")}
        onClick={onScrollLeft}
      >
        <FaAngleLeft />
      </div>
      <div
        style={{
          display: checkScroll() ? "none" : "block",
        }}
        className={[classes["Scroll-arrow"], classes["Right-arrow"]].join(" ")}
        onClick={onScrollRight}
      >
        <FaAngleRight />
      </div>
    </div>
  );
};

export default Stories;
