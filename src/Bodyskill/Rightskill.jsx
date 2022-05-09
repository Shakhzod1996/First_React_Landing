import React from "react";
import './Bodyskill.css'

export default function Rightskill() {
  return (
    <div className="right">
      <h2>Grow Your Skills To Advance Your Career Path.</h2>
      <p>We have something big for you who want to level up!</p>
      <div className="input-div">
        <input type="text" placeholder="What do you want to learn..." />
        <i className='bx bx-search'></i>
      </div>
      <span>Suggestions</span>
      <div className="btns">
      <button>UI UX Design</button>
      <button>Css Fundamentals</button>
      <button>3D Design illustration</button>
      <button>Website Developer</button>
      <button>Logo Design Icon Design</button>
      <button>UI UX Design</button>
      </div>
    </div>
  );
}
