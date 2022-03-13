const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if (request.query.hasOwnProperty('id')) {
      const requestId = Number(request.query.id);
      const reviews = await knex("reviews")
        .select()
        .where('id', '=', requestId);
      if (Object.keys((reviews)).length !== 0) {
        response.json(reviews);
      } else {
        response.status(404).json(`No review matches the id: ${requestId}`);
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


router.post("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertRequest = request.body;
       
        const reviews = await knex("reviews").insert({
             
            id: insertRequest.id,
            title: insertRequest.title,
            description: insertRequest.description,
            meal_id: insertRequest.meal_id,
            stars: insertRequest.stars,
            created_date: insertRequest.created_date,
            
           
        });
        response.json(reviews);
    } catch (error) {
        throw error;
    }
});



router.put("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const requestedId = Number(request.query.id);
      const result = await knex("reviews")
          .where("id", "=", requestedId)
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



router.delete("/", async (request, response) => {
    try {
      const requestedId = Number(request.query.id);
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const result = await knex("reviews")
            .where("id", "=", requestedId)
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