import React from "react";

export default function Cards({ title, description, avatar }) {
  return (
    <div className="card-item">
      <div className="card-img">
        <i className={avatar}></i>
      </div>
      <div>
        <div className="title">{title}</div>

        <div className="description">{description}</div>
      </div>
    </div>
  );
}
