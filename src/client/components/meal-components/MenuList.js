import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MealCards from "./MealCards";
import { GlobalContext } from "../DataManager/GlobalProvider";

function MenuList() {
  const data = useContext(GlobalContext);
  const meals = data.meals;
  const joinedMeals = data.joinedMeals;

  const bookedFoods = joinedMeals.filter(
    (meals) => meals.max_number_of_guests <= meals.reserved_guests
  );

  const result = meals.filter(
    (meal) => !bookedFoods.find((food) => meal.id === food.meal_id)
  );

  const availableMeals = joinedMeals.map((element) => ({
    ...element,
    availableSpots:
      element.max_number_of_guests - parseInt(element.reserved_guests),
  }));
  // console.log(availableMeals, result);

  return (
    <div className="meal-menu">
      {meals &&
        meals.map((meal, index) => (
          <Link className="text-link" key={index} to={`/menu/${meal.id}`}>
            <MealCards meal={meal} />
          </Link>
        ))}
    </div>
  );
}

export default MenuList;

/*
const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat("default").format(date));
  <CardImage image={falafel}></CardImage>
  // const availableMeals = joinedMeals.forEach(
  //   (element) =>
  //     (element.availableSpots =
  //       element.max_number_of_guests - parseInt(element.reserved_guests))
  // );
 style={{ color: "inherit", textDecoration: "inherit" }}
  //   const availableMeals = joinedMeals.map( ( element ) =>({ ...element,availableSpots:element.max_number_of_guests - parseInt( element.reserved_guests )}); {
  //  { ... element, element.availableSpots =
  //   element.max_number_of_guests - parseInt( element.reserved_guests ) )}
  //   });

  console.log("full booked meals:", bookedFoods);
  console.log(
    "meals with empty slots:",
    result,
    "meals with number of reservations:",
    availableMeals
  );

  import falafel from "../images/falafel.jpg";
import CardImage from "./CardImages";


*/
