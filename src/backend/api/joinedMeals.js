const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const meals = await knex("meals").select();
    // response.json(reservations);
    const totalReservation = await knex("reservations")
      .select(
        "meal_id",
        "title",
        "number_of_guests",
        "max_number_of_guests",
        "meals.title",
        "meals.Hosting_time",
        "meals.price",
        "meals.description",
        "meals.location"
      )
      .sum("number_of_guests AS reserved_guests")
      .join("meals", "meal_id", "=", "meals.id")
      .groupBy("meal_id");

    const bookedMeals = totalReservation.filter(
      (reservation) =>
        Number(reservation.reserved_guests) >= reservation.max_number_of_guests
    );

    // const availableMealId = availableMeals.map((meal) => meal.meal_id);
    // meals = meals.filter((meal) => availableMealId.includes(meal.id));
    // const availableMeals = meals.filter((meal) => {
    //   meal.id !== bookedMeals.meal_id;
    // });

    response.json(totalReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

/*
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
   
  } catch (error) {
    throw error;
  }

*/
