import React from "react";
import "./Webinar.css";
import WebinarCard from "./WebinarCard";

// ?Import Images
import office1 from "../assets/office1.png";
import office2 from "../assets/office2.jpg";
import office3 from "../assets/office3.jpg";

export default function Webinar() {
  return (
    <div className="webinar">
      <div className="container">
        <div className="web-header">
          <h2>Live Online Webinar</h2>
          <p>
            You can stream Webinar live on our apps. Stay update on our Webinar,
            it’s Free!
          </p>
        </div>
        <div className="webinar-flex">
          <div className="webcard">
            <div className="webc1">
              <WebinarCard back={office1} />
            </div>
          </div>

          <div className="webcard web-big">
            <div className="webc2">
              <WebinarCard back={office2} />
            </div>
          </div>

          <div className="webcard">
            <div className="webc3">
              <WebinarCard back={office3} />
            </div>
          </div>
        </div>

        <div className="see-more-div">
          <button>See more webinar videos</button>
          <i className='bx bx-right-arrow-alt'></i>
        </div>
      </div>
    </div>
  );
}
