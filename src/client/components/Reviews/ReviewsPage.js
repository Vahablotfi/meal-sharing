import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../DataManager/GlobalProvider";
import ReviewCards from "./ReviewCards";
import "./ReviewCards.css";

function ReviewsPage() {
  const allReviews = useContext(GlobalContext).reviews;
  const reviews = allReviews.slice(0, 4);

  return (
    <div className="homePage-reviews">
      {reviews.map((review, index) => (
        <ReviewCards key={index} review={review} />
      ))}
    </div>
  );
}

export default ReviewsPage;
