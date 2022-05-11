import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../DataManager/GlobalProvider";
import "./singleMealPage.css";
import ReserveMeal from "../BookingForms/ReserveMeal";
import PopUp from "../popUpComponent/PopUp";

function SingleMealPage() {
  const [openForm, setOpenForm] = useState(false);
  const allMeals = useContext(GlobalContext).meals;
  const allReviews = useContext(GlobalContext).reviews;
  const { id } = useParams();

  const RequestMeal = allMeals.filter((m) => m.meal_id == id);
  const mealReviews = allReviews.filter((r) => r.meal_id == id);

  const dateFormat = new Intl.DateTimeFormat("en", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  const title = RequestMeal.map((meal) => meal.title);
  const description = RequestMeal.map((meal) => meal.description);
  const location = RequestMeal.map((meal) => meal.location);
  const price = RequestMeal.map((meal) => meal.price);
  const hostingDate = RequestMeal.map((meal) => meal.Hosting_time);

  const eventDate = dateFormat.format(thisDate);
  const mealPrice = `Price : ${price}DKK`;
  const thisDate = new Date(hostingDate[0]);
  const maxGuests = RequestMeal.map((m) => m.availableSpots);

  return (
    <div className="singleMeal-page">
      <div className="single-meal">
        <PopUp open={openForm}>
          <ReserveMeal
            meal={RequestMeal}
            closePopUp={() => setOpenForm(false)}
          />
        </PopUp>
        <div className="meal-pic">
          <img src={`https://source.unsplash.com/random/1400x400?food`}></img>
        </div>

        <div className="singleMeal-info">
          <h1>{title}</h1>
          <h4>{description}</h4>
          <h4>{location}</h4>
          <h4>{mealPrice}</h4>
          <h4>{eventDate}</h4>
          {maxGuests == 0 ? <h2>No more spot available</h2> : ""}
        </div>
        <button className="book-seats" onClick={() => setOpenForm(true)}>
          book seats
        </button>
      </div>
    </div>
  );
}

export default SingleMealPage;
