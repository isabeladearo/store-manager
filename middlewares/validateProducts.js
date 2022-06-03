const Joi = require('joi');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const validateProducts = (req, res, next) => {
  const { error } = productsSchema.validate(req.body);

  if (!error) {
    return next();
  }

  const { type, message } = error.details[0];

  const STATUS_CODE = {
    'any.required': 400,
    'string.min': 422,
    'number.min': 422,
  };

  res.status(STATUS_CODE[type]).json({ message });
};

module.exports = validateProducts;
