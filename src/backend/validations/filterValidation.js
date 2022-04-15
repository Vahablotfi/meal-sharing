const Joi = require('joi')
    .extend(require('@joi/date'));
  

    const filterValidSchema = Joi.object({
    id: Joi.number().integer(),
    title: Joi.string(),
    maxPrice: Joi.number().precision(2),
    limit: Joi.number().integer(),
    createdAfter: Joi.date().format('YYYY-MM-DD'),
    availableReservations: Joi.boolean(),
});

const validationFilter = (request, response, next) => {
  const { error, value } = filterValidSchema.validate(request.query)
  if (error) {
    response.status(400).send(error.message);
  } else {
    next();
  }
};

module.exports = validationFilter;