const Joi = require('joi')
    .extend(require('@joi/date'));

const currentDate = new Date();

    const reservationValidSchema = Joi.object({
    id: Joi.number().integer(),
    number_of_guests:Joi.number().integer().required(),
    meal_id: Joi.number().integer().required(), 
    created_date: Joi.date().timestamp(),
    contact_phonenumber:Joi.number().min(8).required(),
    contact_name: Joi.string().min(4).required(),
  contact_email:Joi.string().email(),
    })


    const inputValidation =  (request, response, next)=> {
    const { error, value } = reservationValidSchema.validate(request.body)
    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
    }

    module.exports = inputValidation;