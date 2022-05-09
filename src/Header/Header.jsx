import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

export default function Header() {

  let navbar = ['Home', 'Courses', 'Webinar', 'Pricing']
  return (
    <div className="header">
      <div className="container">
        <div className="head-inside">
          <h3>Sinauw</h3>
          <div className="sidebar">
            <ul>
              {navbar.map((item,index) => (
                <Navbar item={item} key={index} />
              ))}
            </ul>
          </div>

          <div className="login">
            <div className="log">
              <p>Eng</p>
              <i className='bx bx-globe'></i>
              <i className='bx bx-chevron-down'></i>
            </div>
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
