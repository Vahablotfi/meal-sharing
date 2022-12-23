import React from "react";
import "./smallMenuStyle.css";

function SmallMenu({ meal }) {
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
    <div className="smallMenuCard">
      <img
        className="smallMenuCard-pic"
        src={`https://source.unsplash.com/random?food`}
      />
      <div className="smallMenuCard-info">
        <h4 className="smallMenuCard-title">{meal.title}</h4>
        <hr className="smallMenuCard-separator" />
        <h6>{price}</h6>
        <h6>{meal.location}</h6>
        <h6>{date}</h6>

        <button className="smallMenuCard-btn">Book</button>
      </div>
    </div>
  );
}

export default SmallMenu;
