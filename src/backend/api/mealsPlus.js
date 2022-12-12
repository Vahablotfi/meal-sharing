const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
   
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
 
    response.json(fullyBookedMeals);
  } catch (error) {
    throw error;
  
  }
});

module.exports = router;















