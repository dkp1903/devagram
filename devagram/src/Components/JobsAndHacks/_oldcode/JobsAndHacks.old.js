import React from "react";
import "./JobsAndHacks.css";
import Navbar from "../../Navbar/Navbar";
import HackthonCard from "../HackathonCard/HackathonCard";

function JobsAndHacks() {
  return (
    <>
      <Navbar />
      <div className="jobs-container">
        <div className="jobs">
          <div className="card-row">
            <div className="card">
              <img
                alt=""
                src='https://i.ytimg alt="".com/vi/DVuRGCuFoa0/maxresdefault.jpg'
                className="card-image"
              />
              <div className="card-title">Imagine Cup</div>

              <div className="card-desc">
                The 19th annual Imagine Cup is more than just a competition for
                students—you can work with friends, network with professionals,
                gain new skills, make a difference in the world.
              </div>
              <div className="card-actions">
                <button type="button" className="card-action-readMore">
                  Participate
                </button>
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <img
                alt=""
                src='https://i.ytimg alt="".com/vi/P4KCwpqtkjU/maxresdefault.jpg'
                className="card-image"
              />
              <div className="card-title">Redbull Basement</div>

              <div className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus iusto s delenitiea atque. Nostrum odio temporibus nisi
                inventore, velit hic in quas quos quo?
              </div>
              <div className="card-actions">
                <button type="button" className="card-action-readMore">
                  Participate
                </button>
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKKos14COqwz2WWMwpQSAn8Vt6eEfhVBPWHg&usqp=CAU"
                className="card-image"
              />
              <div className="card-title">Hacker Cup</div>

              <div className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus iusto s delenitiea atque. Nostrum odio temporibus nisi
                inventore, velit hic in quas quos quo?
              </div>
              <div className="card-actions">
                <button type="button" className="card-action-readMore">
                  Participate
                </button>
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="card">
              <img
                alt=""
                src="https://miro.medium.com/max/3840/1*0d--FOV5hdLwEybTIY1imQ.png"
                className="card-image"
              />
              <div className="card-title">MLH Localhost</div>

              <div className="card-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus iusto s delenitiea atque. Nostrum odio temporibus nisi
                inventore, velit hic in quas quos quo?
              </div>
              <div className="card-actions">
                <button type="button" className="card-action-readMore">
                  Participate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsAndHacks;
