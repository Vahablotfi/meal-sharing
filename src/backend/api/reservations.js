const express = require("express");
const router = express.Router();
const knex = require("../database");
const inputValidation = require("../validations/reservationsValidation");
const validationFilter = require("../validations/filterValidation");

const currentDate = new Date();
router.post("/", inputValidation, postReservationsHandler);
router.get("/", validationFilter, getReservationsHandler);
router.put("/", validationFilter, putReservationsHandler);
router.delete("/", validationFilter, deleteReservationsHandler);

async function getReservationsHandler(request, response) {
  let reservations = await knex("reservations").select();
  try {
    if ("id" in request.query) {
      reservations = reservations.filter(
        (reservation) => parseInt(reservation.id) === parseInt(request.query.id)
      );
    }
    if (reservations.length !== 0) {
      response.send(reservations);
    } else {
      response
        .status(404)
        .send(`No reservation matches the id: ${request.query.id}`);
    }
  } catch (error) {
    throw error;
  }
}

async function postReservationsHandler(request, response) {
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
    response.send("Successfully Added");
  } catch (error) {
    throw error;
  }
}

async function putReservationsHandler(request, response) {
  try {
    const result = await knex("reservations")
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

async function deleteReservationsHandler(request, response) {
  try {
    const result = await knex("reservations")
      .where("id", "=", request.query.id)
      .del();
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
