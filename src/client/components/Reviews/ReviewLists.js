import React from "react";

export default function ReviewLists(review) {
  console.log("in review lists", review);
  return (
    <div className="review-list">
      <div className="review-card">
        <div className="review-img">
          <img src="https://img.icons8.com/material-outlined/24/000000/user-male-circle.png" />
        </div>
        <div className="review-info">
          <h2>what the fuck</h2>
          {/* <p>{review.description}</p>
          <p>{review.stars}</p> */}
        </div>
      </div>
      ;
    </div>
  );
}
