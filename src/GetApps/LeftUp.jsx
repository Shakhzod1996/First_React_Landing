import React from "react";
import "./GetApp.css";

// ?Import Images
import img1 from "../assets/up1.png";
import img2 from "../assets/up2.png";

export default function LeftUp() {
  return (
    <div className="left-up">
      <h2>Get Our Apps, Now!</h2>
      <p>
        Reach out our apps everywhere and everytime with Sinauw Mobile
        Application.
      </p>

      <div className="imgs-left">
        <img src={img1} className="img1" alt="img" />
        <img src={img2} className="img2" alt="img" />
      </div>
    </div>
  );
}
