const express = require("express");
const router = express.Router();
const knex = require("../database");
const  inputValidation  = require("../validations/mealsValidation")
const validationFilter=require("../validations/filterValidation")


const currentDate = new Date();

router.get("/", validationFilter, async (request, response) => {
    console.log('this is date',currentDate);
     let meals = await knex("meals");
    try {
       
        if ('id' in request.query) {
               meals = await knex('meals')
                .select()
                .where('id', '=',request.query.id);
        }
        if ('maxPrice' in request.query) {
            meals = await knex('meals')
                .select()
                .where('price', '<=', request.query.maxPrice);
        }
        if ('createdAfter' in request.query) {
            meals = await knex('meals')
                .select()
                .where('created_date', '>', request.query.createdAfter);
        }
        if ('availableReservations' in request.query) {
            const totalReservation = await knex('reservations')
                .select("meal_id", "title", "max_number_of_guests")
                .sum('number_of_guests AS reserved_guests')
                .join('meals', "meal_id", "=", "meals.id")
                .groupBy('meal_id');

            meals = totalReservation.filter(reservation => 
                Number(reservation.reserved_guests) < reservation.max_number_of_guests);
        }
        if ('title' in request.query) {
            meals = await knex('meals')
                .select()
                .where('title', 'like', `%${(request.query.title).toLowerCase()}%`);
        }
        if ('limit' in request.query) {
             meals = await knex('meals')
                .select()
                .limit(request.query.limit);
        }
        if('maxPrice' in request.query &&
            'limit' in request.query) {
            meals = await knex('meals').select()
                    .where('price', '<=', request.query.maxPrice)
                    .limit(request.query.limit)
                    .orderBy('price');
                   }
        response.send(meals);
        
    } catch (error) {
        throw error;
    }
})









router.post("/",inputValidation, async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertRequest = request.body;
        const meals = await knex("meals").insert({
             
            id: insertRequest.id,
            title: insertRequest.title,
            description: insertRequest.description,
            location: insertRequest.location,
            Hosting_time: insertRequest.Hosting_time,
            max_number_of_guests: insertRequest.max_number_of_guests,
            price: insertRequest.price,
            created_date: currentDate,
        });
        response.json(meals);
    } catch (error) {
        throw error;
    }
});
                

router.put("/",validationFilter, async (request,response ) => {
    try {
      
      const result = await knex("meals")
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
});


router.delete("/", validationFilter,async (request, response) => {
    try {
   
    // knex syntax for selecting things. Look up the documentation for knex for further info
        const result = await knex("meals")
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


















