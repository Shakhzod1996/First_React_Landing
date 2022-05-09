import React from "react";
import LearCard from "./LearCard";
import "./LearnSection.css";

// ?Imgs import main
import Learn1 from "../assets/learn1.jpg";
import Learn2 from "../assets/learn2.png";
import Learn3 from "../assets/learn3.jpg";
import Learn4 from "../assets/learn4.jpeg";

// ?Import Bottom Imgs
import bottomImg1 from "../assets/bot1.jpg";
import bottomImg2 from "../assets/bot2.jpg";
import bottomImg3 from "../assets/bot3.jpg";
import bottomImg4 from "../assets/bot4.jpg";

export default function LearnSection() {
  return (
    <div className="learn-section">
      <div className="container">
        <div className="learn-header">
          <h2>What Do You Want to Learn?</h2>
          <p>Choose the right class as you need. Then enjoy studying.</p>
          <div className="learn-cards-grid">
            <LearCard
              topImg={Learn1}
              tech={"Technology"}
              minhead={"Digital Marketing Strategy"}
              desc={
                "This course aims to give you deeper understanding of core processes ..."
              }
              botImg={bottomImg1}
              botName={"Joey Piere"}
              botPosition={"Mentor"}
            />
            <LearCard
              topImg={Learn2}
              tech={"Technology"}
              minhead={"Digital Marketing Strategy"}
              desc={
                "This course aims to give you deeper understanding of core processes ..."
              }
              botImg={bottomImg2}
              botName={"Joey Piere"}
              botPosition={"Mentor"}
            />
            <LearCard
              topImg={Learn3}
              tech={"Technology"}
              minhead={"Digital Marketing Strategy"}
              desc={
                "This course aims to give you deeper understanding of core processes ..."
              }
              botImg={bottomImg3}
              botName={"Joey Piere"}
              botPosition={"Mentor"}
            />
            <LearCard
              topImg={Learn4}
              tech={"Technology"}
              minhead={"Digital Marketing Strategy"}
              desc={
                "This course aims to give you deeper understanding of core processes ..."
              }
              botImg={bottomImg4}
              botName={"Joey Piere"}
              botPosition={"Mentor"}
            />
          </div>
        </div>
        <div className="show-case-dive">
          <button>Show All Cases</button>
        </div>
      </div>
    </div>
  );
}
