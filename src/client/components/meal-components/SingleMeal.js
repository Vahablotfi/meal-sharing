import React from "react";
import { useParams } from "react-router-dom";

const SingleMeal = () => {
  const { id } = useParams();
  return (
    <div className="Single-food">
      <h2>single food-{id}</h2>
    </div>
  );
};

export default SingleMeal;
