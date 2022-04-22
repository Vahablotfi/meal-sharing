import React from "react";
import "./MealCards.css";

const MealCards = ({ meal }) => {
  return (
    <div className="meal-card">
      <div className="meal-image">
        <img src={`https://source.unsplash.com/random/200x200?food`} />
      </div>
      <h4>{meal.title}</h4>
      <h6>{meal.price}</h6>
    </div>
  );
};

export default MealCards;

/*

    <div className="meal-card">2</div>
      <div className="meal-card">3</div>
      <div className="meal-card">4</div>
      <div className="meal-card">5</div>
      <div className="meal-card">6</div>
      <div className="meal-card">7</div> 
*/
