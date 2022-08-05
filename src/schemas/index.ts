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
};
