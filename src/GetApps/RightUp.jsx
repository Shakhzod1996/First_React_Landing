import React from "react";

// ?Importing Images
import img1 from '../assets/firstavatat.jpg'
import img2 from '../assets/secondavatar.jpg'
import img3 from '../assets/thirdavatar.jpg'


export default function RightUp() {
  return (
    <div className="right-up">
      <div className="right-phone">
        <div className="message-flex">
          <div className="avatar-message">
            <div className="user-flex">
              <div className="user">
                <i class="bx bxs-user"></i>
              </div>

              <div className="user-info">
                <h5>Hello, Alexander</h5>
                <p>Premium member</p>
              </div>
            </div>
          </div>

          <div className="crown">
            <i class="bx bxs-crown"></i>
          </div>
        </div>

        <div className="center-lamp">
          <i class="bx bxs-bulb"></i>

          <div className="lamp-desc">
            <h4>Grow Your Skill, Join Now!</h4>
            <p>We have something big for you who want to level up!</p>
          </div>
        </div>
      </div>

      <div className="first-avatar one">
        <img src={img1} alt="img" />
      </div>

      <div className="first-avatar two">
        <img src={img2} alt="img" />
      </div>

      <div className="first-avatar three">
        <img src={img3} alt="img" />
      </div>
    </div>
  );
}
