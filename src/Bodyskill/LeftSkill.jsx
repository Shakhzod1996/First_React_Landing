import React from "react";
import "./Bodyskill.css";

import img from "../assets/first.png";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";

export default function LeftSkill() {
  return (
    <div className="left">
      <img src={img} alt="img" className="first-img" />
      <div className="idea">
        <i className="bx bxs-bulb"></i>
      </div>
      <div className="book">
        <i className="bx bxs-book-alt"></i>
      </div>

      <div className="users">
        <div className="user-img one ">
          <img src={user1} alt="img" />
        </div>

        <div className="user-img two">
          <img src={user2} alt="img" />
        </div>

        <div className="user-img two">
          <img src={user3} alt="img" />
        </div>

        <div className="user-img two">
          <img src={user4} alt="img" />
        </div>

        <div className="user-img two ad">
          <i className="bx bx-plus"></i>
        </div>
        <p className="p">More than 80k+ Students <span className="join">joined!</span></p>
      </div>
    </div>
  );
}
