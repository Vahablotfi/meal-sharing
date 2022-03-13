const express = require("express");
const router = express.Router();
const knex = require("../database");


router.get("/", async(request, response) => {

    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const meals = await knex("meals");

        if (request.query.hasOwnProperty('id')) {

            const requestId = Number(request.query.id);
            const requestedMeal = await knex('meals')
                .select()
                .where('id', '=', requestId);

            console.log(requestedMeal);
            console.log(typeof(requestedMeal));
            if (Object.keys((requestedMeal)).length !== 0) {

                response.json(requestedMeal);
            } else {
                response.status(404).json(`No meal matches the id: ${requestId}`);
            }

        } else if (Object.keys(request.query).length > 1 &&
            request.query.hasOwnProperty('maxPrice', 'limit')) {

            const requestPrice = Number(request.query.maxPrice);
            const requestLimit = Number(request.query.limit);
            const mealFinder = meals.some(meal => meal.price <= requestPrice);

            if (requestLimit !== 0 && mealFinder) {

                const requestOrder = await knex('meals').select()
                    .where('price', '<=', requestPrice)
                    .limit(requestLimit)
                    .orderBy('price');
                response.json(requestOrder);
            } else {
                response.status(404).json(`NO meal is cheaper than ${requestPrice}`);
            }

        } else if (request.query.hasOwnProperty('maxPrice')) {

            const requestPrice = Number(request.query.maxPrice);
            const mealFinder = meals.some(meal => meal.price <= requestPrice);
            const requestedMeal = await knex('meals')
                .select()
                .where('price', '<=', requestPrice);

            if (Object.keys((requestedMeal)).length !== 0) {
                response.json(requestedMeal);
            } else {
                response.status(404).json(`NO meal is cheaper than ${requestPrice}`);
            }

        } else if (request.query.hasOwnProperty('createdAfter')) {

            const requestDate = new Date(request.query.createdAfter);
            const mealFinder = meals.some(meal => meal.created_date > requestDate);
            const requestedMeal = await knex('meals')
                .select()
                .where('created_date', '>', requestDate);

            if (Object.keys((requestedMeal)).length !== 0) {
                response.json(requestedMeal);
            } else {
                response.status(404).json(`NO meal has been created after: ${requestDate}`);
            }

        } else if (request.query.hasOwnProperty('limit')) {
            const requestLimit = Number(request.query.limit);
            const requestedLimit = await knex('meals')
                .select()
                .limit(requestLimit);

            if (requestLimit !== 0) {
                response.json(requestedLimit);
            } else {
                response.status(400).json(`Limit request is not valid`)
            }
        } else if (request.query.hasOwnProperty('title')) {

            const requestedTitle = (request.query.title).toLowerCase();
            const requestedMeal = await knex('meals')
                .select()
                .where('title', 'like', `%${requestedTitle}%`);
            if (Object.keys((requestedMeal)).length !== 0) {
                response.json(requestedMeal);
            } else {
                response.status(404).send(`There is no meal with the title ${requestedTitle}`)
            }
        } else if (request.query.hasOwnProperty('availableReservations')) {

            const requestedOrder = request.query;
            const totalReservation = await knex('reservations')
                .select("meal_id", "title", "max_number_of_guests")
                .sum('number_of_guests AS reserved_guests')
                .join('meals', "meal_id", "=", "meals.id")
                .groupBy('meal_id');

            const result = totalReservation.filter(reservation => Number(reservation.reserved_guests) < reservation.max_number_of_guests);

            if (Object.values(requestedOrder) == 'true') {
                response.json(result);
            } else {
                response.status(400).json(`request is not valid`)
            }

        } else {
            response.json(meals);
        }
    } catch (error) {
        throw error;
    }

});




router.post("/", async(request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertRequest = request.body;
        console.log(insertRequest);
        const meals = await knex("meals").insert({

            title: insertRequest.title,
            description: insertRequest.description,
            location: insertRequest.location,
            Hosting_time: insertRequest.Hosting_time,
            max_number_of_guests: insertRequest.max_number_of_guests,
            price: insertRequest.price,
            created_date: insertRequest.created_date
        });
        response.json(meals);
    } catch (error) {
        throw error;
    }
});

module.exports = router;





// {
//     title: 'Falafel',
//     description: "Homemade vegan falafel wrap",
//     location: "Beirut",
//     Hosting_time: 2022 - 04 - 25 18: 30: 00,
//     max_number_of_guests: 20,
//     price: 50,
//     created_date: 2022 - 03 - 28
// });