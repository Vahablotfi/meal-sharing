const express = require("express");
const router = express.Router();
const knex = require("../database");
const inputValidation = require("../validations/reservationsValidation");
const validationFilter = require("../validations/filterValidation");

const currentDate = new Date();

router.get("/", validationFilter, async (request, response) => {
  try {
    if ("id" in request.query) {
      const reservations = await knex("reservations")
        .select()
        .where("id", "=", request.query.id);
      if (Object.keys(reservations).length !== 0) {
        response.json(reservations);
      } else {
        response
          .status(404)
          .json(`No reservation matches the id: ${request.query.id}`);
      }
    } else {
      const reservations = await knex("reservations").select();
      response.json(reservations);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", inputValidation, async (request, response) => {
  try {
    const insertRequest = request.body;

    const reservations = await knex("reservations").insert({
      id: insertRequest.id,
      number_of_guests: insertRequest.number_of_guests,
      meal_id: insertRequest.meal_id,
      created_date: currentDate,
      contact_phonenumber: insertRequest.contact_phonenumber,
      contact_name: insertRequest.contact_name,
      contact_email: insertRequest.contact_email,
    });
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.put("/", validationFilter, async (request, response) => {
  try {
    const result = await knex("reservations")
      .where("id", "=", request.query.id)
      .update(request.body);
    if (result > 0) {
      response.json({ message: "Updated" });
    } else {
      response.status(404).json({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
});

router.delete("/", validationFilter, async (request, response) => {
  try {
    const result = await knex("reservations")
      .where("id", "=", request.query.id)
      .del();
    if (result > 0) {
      response.json({ message: "Deleted" });
    } else {
      response.status(404).json({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
