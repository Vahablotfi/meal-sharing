import React from "react";
import "./ReviewCards.css";

function ReviewCards({ review }) {
  return (
    <div className="reviewCards">
      <img src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png" />
      <h4>{review.title}</h4>
      <div className="review-description">
        <p>{review.description}</p>
      </div>
    </div>
  );
}

export default ReviewCards;
