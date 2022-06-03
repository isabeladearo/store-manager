const Joi = require('joi');

const salesSchema = Joi.array().items(
  Joi.object({
    productId: Joi.number().integer().min(1).required(),
    quantity: Joi.number().integer().min(1).required(),
  }),
);

const validateSales = (req, res, next) => {
  const { error } = salesSchema.validate(req.body);

  if (!error) {
    return next();
  }

  const { type, message } = error.details[0];

  const STATUS_CODE = {
    'any.required': 400,
    'number.min': 422,
  };

  res.status(STATUS_CODE[type]).json({ message: message.replace(/\[\d\]\./g, '') });
};

module.exports = validateSales;
