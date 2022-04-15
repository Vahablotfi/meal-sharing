const express = require("express");
const router = express.Router();
const knex = require("../database");
const  inputValidation  = require("../validations/reviewsValidation")
const validationFilter = require("../validations/filterValidation")

const currentDate = new Date();

router.get("/",validationFilter, async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if ('id' in request.query) {
      const reviews = await knex("reviews")
        .select()
        .where('id', '=', request.query.id);
      if (Object.keys((reviews)).length !== 0) {
        response.json(reviews);
      } else {
        response.status(404).json(`No review matches the id: ${request.query.id}`);
      }
    } else {
      const reviews = await knex("reviews")
        .select();
       response.json(reviews);
    }
  } catch (error) {
    throw error;
  }
});


router.post("/",inputValidation, async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
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
        response.status(400).send("Input is not valid data")
        }
    
    } catch (error) {
        throw error;
    }
});



router.put("/",validationFilter, async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
     
      const result = await knex("reviews")
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



router.delete("/",validationFilter, async (request, response) => {
    try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const result = await knex("reviews")
            .where("id", "=",request.query.id)
        .del();
       if (result  > 0) {
      response.json({ message: "Deleted" });
    } else {
      response.status(404).json({ error: "id does not exist" });
    }
    
  } catch (error) {
    throw error;
  }
});

module.exports = router;