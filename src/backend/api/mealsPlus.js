const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // const meals = await knex("meals").select();
    const fullyBookedMeals = await knex("Reservations")
      .sum("number_of_guests AS reserved_guests")
      .select(
        "meal_id",
        "title",
        "Meals.max_number_of_guests",
        "Meals.title",
        "Meals.Hosting_time",
        "Meals.price",
        "Meals.description",
        "Meals.location"
      )
      .join("Meals", "meal_id", "=", "Meals.id")
      .groupBy("meal_id");
      // .havingRaw("reserved_guests = max_number_of_guests");
    // console.log( fullyBookedMeals );
    response.json(fullyBookedMeals);
  } catch (error) {
    throw error;
    // console.log(error);
    // response.status(500).json({ error });
  }
});

module.exports = router;










/*

    .select(
        "meal_id",
        "title",
        "number_of_guests",
        "meals.max_number_of_guests",
        "meals.title",
        "meals.Hosting_time",
        "meals.price",
        "meals.description",
        "meals.location"
      )
      .sum("number_of_guests AS reserved_guests")
      .join("meals", "meal_id", "=", "meals.id")
      .groupBy("meal_id")
      .having("reserved_guests >= max_number_of_guests");





        .select()
      .sum("number_of_guests AS reserved_guests")
      // .join("meals", "meal_id", "=", "meals.id")
      .groupBy("meal_id");
    // .havingRaw( "reserved_guests >= max_number_of_guests" );


*/




