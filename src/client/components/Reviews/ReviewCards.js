import React from "react";
import avatar from "../../assets/Images/person-avatar.svg";
import "./ReviewCards.css";

function ReviewCards({ review }) {
  return (
    <div className="reviewCards">
      <img src={avatar} />
      <h4>{review.title}</h4>
      <div className="review-description">
        <p>{review.description}</p>
      </div>
    </div>
  );
}

export default ReviewCards;
