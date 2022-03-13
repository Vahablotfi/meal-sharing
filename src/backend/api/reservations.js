const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if (request.query.hasOwnProperty('id')) {
      const requestId = Number(request.query.id);
      const reservations = await knex("reservations")
        .select()
        .where('id', '=', requestId);
      if (Object.keys((reservations)).length !== 0) {
        response.json(reservations);
      } else {
        response.status(404).json(`No reservation matches the id: ${requestId}`);
      }
    } else {
      const reservations = await knex("reservations")
        .select();
       response.json(reservations);
    }
    
  } catch (error) {
    throw error;
  }
});



router.post("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertRequest = request.body;
      
        const reservations = await knex("reservations").insert({
             
            id: insertRequest.id,
            number_of_guests: insertRequest.number_of_guests,
            meal_id: insertRequest.meal_id,
            created_date: insertRequest.created_date,
            contact_phonenumber: insertRequest.contact_phonenumber,
            contact_name: insertRequest.contact_name,
            contact_email: insertRequest.contact_email,
         
      
        });
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});


router.put("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
      const requestedId = Number(request.query.id);
      const result = await knex("reservations")
          .where("id", "=", requestedId)
        .update(request.body);
     if (result  > 0) {
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
      const result = await knex("reservations")
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