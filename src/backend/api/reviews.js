const express = require("express");
const router = express.Router();
const knex = require("../database");
const inputValidation = require("../validations/reviewsValidation");
const validationFilter = require("../validations/filterValidation");

const currentDate = new Date();

router.post("/", inputValidation, postReviewHandler);
router.get("/", validationFilter, getReviewsHandler);
router.put("/", validationFilter, putReviewHandler);
router.delete("/", validationFilter, deleteReviewHandler);

async function getReviewsHandler(request, response) {
  let reviews = await knex("reviews").select();
  try {
    if ("id" in request.query) {
      reviews.filter((review) => parseInt(review.id) === request.query.id);
    }
    if (reviews.length !== 0) {
      response.send(reviews);
    } else {
      response
        .status(404)
        .send(`No review matches the id: ${request.query.id}`);
    }
  } catch (error) {
    throw error;
  }
}

async function postReviewHandler(request, response) {
  try {
    const insertRequest = request.body;
    const reviews = await knex("reviews").insert({
      id: insertRequest.id,
      title: insertRequest.title,
      description: insertRequest.description,
      meal_id: insertRequest.meal_id,
      stars: insertRequest.stars,
      created_date: currentDate,
    });

    if (reviews) {
      response.json(reviews);
    } else {
      response.status(400).send("Input is not valid data");
    }
  } catch (error) {
    throw error;
  }
}

async function putReviewHandler(request, response) {
  try {
    const result = await knex("reviews")
      .where("id", "=", request.query.id)
      .update(request.body);
    if (result > 0) {
      response.send({ message: "Updated" });
    } else {
      response.status(404).send({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
}

async function deleteReviewHandler(request, response) {
  try {
    const result = await knex("reviews")
      .where("id", "=", request.query.id)
      .del();
    if (result > 0) {
      response.send({ message: "Deleted" });
    } else {
      response.status(404).send({ error: "id does not exist" });
    }
  } catch (error) {
    throw error;
  }
}

module.exports = router;
