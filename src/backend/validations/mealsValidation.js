const Joi = require("joi").extend(require("@joi/date"));

const currentDate = new Date();

const mealsValidSchema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string().required(),
   description: Joi.string(),
  location: Joi.string().required(),

  created_date: Joi.date(),
  Hosting_time: Joi.date().greater("now").required(),
  max_number_of_guests: Joi.number().integer().min(10).max(100).required(),
  price: Joi.number().precision(2).required(),
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
