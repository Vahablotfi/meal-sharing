<<<<<<< HEAD
const Joi = require('joi')
  .extend(require('@joi/date'));
    

  const currentDate = new Date();
=======
const Joi = require("joi").extend(require("@joi/date"));

const currentDate = new Date();
>>>>>>> frontend

const mealsValidSchema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string().required(),
<<<<<<< HEAD
  description: Joi.string().alphanum(),
  location: Joi.string().alphanum().required(),
=======
  description: Joi.string(),
  location: Joi.string().required(),
>>>>>>> frontend
  created_date: Joi.date(),
  Hosting_time: Joi.date().greater("now").required(),
  max_number_of_guests: Joi.number().integer().min(10).max(100).required(),
  price: Joi.number().precision(2).required(),
<<<<<<< HEAD
});          


const inputValidation =  (request, response, next)=> {
    const { error, value } = mealsValidSchema.validate(request.body)
    if (error) {
        response.status(400).send(error.message);
    } else {
        next();
    }
}




module.exports = inputValidation;

=======
});

const inputValidation = (request, response, next) => {
  const { error, value } = mealsValidSchema.validate(request.body);
  if (error) {
    response.status(400).send(error.message);
  } else {
    next();
  }
};

module.exports = inputValidation;
>>>>>>> frontend
