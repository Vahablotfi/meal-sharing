const Joi = require("joi").extend(require("@joi/date"));

const currentDate = new Date();

const reviewValidSchema = Joi.object({
  id: Joi.number().integer(),
  title: Joi.string(),
  meal_id: Joi.number().integer().required(),
  created_date: Joi.date(),
  description: Joi.string().alphanum(),
  stars: Joi.number().min(1).max(5).integer().required(),
});

const inputValidation = (request, response, next) => {
  const { error, value } = reviewValidSchema.validate(request.body);
  if (error) {
    response.status(400).send(error.message);
  } else {
    next();
  }
};

module.exports = inputValidation;
