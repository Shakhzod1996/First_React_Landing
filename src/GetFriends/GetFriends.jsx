import React from "react";
import Cards from "./Cards";
import "./GetFriends.css";

export default function GetFriends() {
  let array = [
    {
      avatar: `bx bx-group`,
      title: "Get New Friends",
      description:
        "You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!",
    },
    {
      avatar: "bx bx-message-square-dots",
      title: "Expert and Fun Mentor",
      description:
        "Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.",
    },

    {
      avatar: `bx bxs-book-alt`,
      title: "Flexible Access",
      description:
        "You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!",
    },
  ];
  return (
    <div className="get-friends">
      <div className="container">
        <div className="get-inside-grid">
          {array.map((item, index) => (
            <Cards
              title={item.title}
              description={item.description}
              avatar={item.avatar} 
              key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
