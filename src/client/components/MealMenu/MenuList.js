import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MealCards from "./MealCards";
import "./MealCards.css";
import { GlobalContext } from "../DataManager/GlobalProvider";
import Footer from "../Footer/Footer";
import Navbar from "../navbar /Navbar";

function MenuList() {
  const mealsToDisplay = useContext(GlobalContext).meals;

  return (
    <>
      <Navbar />
      <div className="meal-menu">
        {mealsToDisplay &&
          mealsToDisplay.map((meal, index) => (
            <Link
              className="text-link"
              to={`/menu/${meal.meal_id}`}
              key={index}
            >
              <MealCards meal={meal} />
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
}

export default MenuList;
