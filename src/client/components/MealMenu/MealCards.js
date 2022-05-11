import React from "react";
import "./MealCards.css";

const MealCards = ({ meal }) => {
  const dateFormat = new Intl.DateTimeFormat("en", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = dateFormat.format(new Date(meal.Hosting_time));

  const price = `Price : ${meal.price}DKK`;

  return (
    <div className="meal-card">
      <img
        className="meal-image"
        src={`https://source.unsplash.com/random/200x200?food`}
      />
      <div className="event-info">
        <h4 className=" meal-Card-title">{meal.title}</h4>
        <h6>{price}</h6>
        <h6>{meal.location}</h6>
        <h6>{date}</h6>
        <button className="meal-card-btn">Book</button>
      </div>
    </div>
  );
};

export default MealCards;
