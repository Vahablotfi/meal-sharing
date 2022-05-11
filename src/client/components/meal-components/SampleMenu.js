import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../DataManager/GlobalProvider";
import SmallMenu from "./SmallMenu";
import "./smallMenuStyle.css";

function SampleMenu() {
  const allMeals = useContext(GlobalContext).meals;
  const sampleMeals = allMeals.slice(0, 4);

  return (
    <div className="sample-menu">
      {sampleMeals.map((meal, index) => (
        <Link className="meal-link" key={index} to={`/menu/${meal.meal_id}`}>
          <SmallMenu meal={meal} />
        </Link>
      ))}
    </div>
  );
}

export default SampleMenu;





