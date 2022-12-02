const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const meals = await knex("meals").select();
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

    response.json(totalReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;


