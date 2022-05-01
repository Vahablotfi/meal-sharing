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
  const mealPath = `/menu/${meal.id}`;
  // console.log(dateFormat.format(new Date(meal.Hosting_time)));

  return (
    <div className="meal-card">
      <img
        className="meal-image"
        src={`https://source.unsplash.com/random/200x200?food`}
      />
      <h4 className=" meal-Card-title">{meal.title}</h4>
      <hr className="title-barrier" />
      <div className="event-info">
        <h6>{price}</h6>
        <h6>{meal.location}</h6>
        <h6>{date}</h6>
        <button>Book</button>
      </div>
    </div>
  );
};

export default MealCards;

/*
 


import Buttons from "../TestComponent/Buttons";
    <div className="meal-card">2</div>
      <div className="meal-card">3</div>
      <div className="meal-card">4</div>
      <div className="meal-card">5</div>
      <div className="meal-card">6</div>
      <div className="meal-card">7</div> 
 <h6>{guestsNumber}</h6>
  // console.log(
  //   new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   }).format(meal.Hosting_time)
  // );

   // const guestsNumber = `for ${meal.max_number_of_guests} guests`;

    
  // const date = new Date(meal.Hosting_time).toLocaleString();
  // const date = new Date(meal.Hosting_time).toUTCString();
  // const date = new Date(meal.Hosting_time).toString();

  // const date = meal.Hosting_time.toString();
  // const date = getDate(meal.Hosting_time);
  // const date = new Date(meal.Hosting_time).toDateString();

*/
