import React from "react";

export default function LearCard({
  topImg,
  tech,
  minhead,
  desc,
  botImg,
  botName,
  botPosition,
}) {
  return (
    <div className="learn-card-main">
      <img className="topImg" src={topImg} alt="img" />
      <span className="tech">{tech}</span>
      <h3 className="minhead">{minhead}</h3>
      <p className="desc">{desc}</p>
      <hr className="hr" />
      <div className="bot-main">
        <img src={botImg} alt="img" />
        <div className="bot-info">
          <h4>{botName}</h4>
          <span>{botPosition}</span>
        </div>
      </div>
      <div className="btn-div">
        <button className="access-btn">Access Class</button>
      </div>
    </div>
  );
}
