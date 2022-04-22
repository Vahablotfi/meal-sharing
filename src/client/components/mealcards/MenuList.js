import React from "react";
import { useContext } from "react";
import MealCards from "./MealCards";
import { GlobalContext } from "../GlobalProvider";
import falafel from "../images/falafel.jpg";
import CardImage from "./CardImages";

function MenuList() {
  const meals = useContext(GlobalContext);

  console.log(meals);
  return (
    <div className="meal-menu">
      {meals.map((meal, index) => (
        <MealCards key={index} meal={meal} />
      ))}
      <CardImage image={falafel}></CardImage>
    </div>
  );
}

export default MenuList;

/*
const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat("default").format(date));
*/
