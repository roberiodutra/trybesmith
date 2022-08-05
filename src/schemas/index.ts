import Joi from "joi"
import errorMessages from "../helpers/errorMessages";

export default {
  body: Joi.object({
    username: Joi.string()
      .required(),
    password: Joi.string()
      .required(),
  }),

  checkBool: Joi.boolean()
    .invalid(true)
    .messages({
      'any.invalid': errorMessages.INVALID_LOGIN,
  }),

  product: Joi.object({
    name: Joi.string()
      .required()
      .min(3),
    amount: Joi.string()
      .required()
      .min(3),
  }),

  user: Joi.object({
    username: Joi.string()
      .required()
      .min(3),
    password: Joi.string()
      .required()
      .min(8),
    classe: Joi.string()
      .required()
      .min(3),
    level: Joi.number()
      .required()
      .min(1),
  }),
};
