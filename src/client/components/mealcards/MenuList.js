import React from "react";
import { useContext } from "react";
import MealCards from "./MealCards";
import { GlobalContext } from "../GlobalProvider";
import falafel from "../images/falafel.jpg";
import CardImage from "./CardImages";

function MenuList() {
  const data = useContext(GlobalContext);
  // const joinedMeals = useContext(GlobalContext);
  const meals = data.meals;

  console.log(data);
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
