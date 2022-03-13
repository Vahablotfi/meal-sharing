const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservations").select("id");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;