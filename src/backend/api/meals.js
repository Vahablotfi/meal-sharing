const express = require("express");
const router = express.Router();
const knex = require("../database");
const inputValidation = require("../validations/mealsValidation");
const validationFilter = require("../validations/filterValidation");

const { request, response } = require("express");
const currentDate = new Date();

router.post("/", inputValidation, postMealsHandler);
router.get("/", validationFilter, getMealsHandler);
router.put("/", validationFilter, putMealsHandler);
router.delete("/", validationFilter, deleteMealsHandler);

async function getMealsHandler(request, response) {
  let meals = await knex("Meals");

  if ("id" in request.query) {
    meals = meals.filter(
      (meal) => parseInt(meal.id) === parseInt(request.query.id)
    );
  }
  if ("maxPrice" in request.query) {
    meals = meals.filter(
      (meal) => parseInt(meal.price) <= request.query.maxPrice
    );
  }
  if ("createdAfter" in request.query) {
    meals = meals.filter(
      (meal) => meal.created_date > new Date(request.query.createdAfter)
    );
  }
  if ("title" in request.query) {
    meals = meals.filter((meal) =>
      meal.title.toLowerCase().includes(request.query.title.toLowerCase())
    );
  }
  if ("limit" in request.query) {
    meals = meals.slice(0, request.query.limit);
  }
  try {
    if ("availableReservations" in request.query) {
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
        .groupBy("meal_id")
        .havingRaw("reserved_guests = max_number_of_guests");

      const availableMeals = meals.filter((meal) => {
        const bookedMealId = fullyBookedMeals.map(
          (bookedMeal) => bookedMeal.meal_id
        );
        return !bookedMealId.includes(meal.id);
      });
      meals = availableMeals;
    }
    if (meals.length === 0) {
      response.send("no match for your request");
    }
    response.send(meals);
  } catch (error) {
    throw error;
  }
}

async function postMealsHandler(request, response) {
  try {
    const insertRequest = request.body;
    const meals = await knex("Meals").insert({
      id: insertRequest.id,
      title: insertRequest.title,
      description: insertRequest.description,
      location: insertRequest.location,
      Hosting_time: insertRequest.Hosting_time,
      max_number_of_guests: insertRequest.max_number_of_guests,
      price: insertRequest.price,
      created_date: currentDate,
    });
    response.send("Successfully added");
  } catch (error) {
    throw error;
  }
}

async function putMealsHandler(request, response) {
  try {
    const result = await knex("Meals")
      .where("id", "=", request.query.id)
      .update(request.body);
    if (result > 0) {
      response.send("Successfully Updated");
    } else {
      response.status(404).send({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
}

async function deleteMealsHandler(request, response) {
  try {
    const result = await knex("Meals").where("id", "=", request.query.id).del();
    if (result > 0) {
      response.send("Successfully Deleted");
    } else {
      response.status(404).send({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
}

module.exports = router;




