import Joi from "joi"
import httpStatus from '../helpers/httpStatusCodes';
import errorMessages from "../helpers/errorMessages";

export default {
  body: Joi.object({
    username: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  }),
  checkBool: Joi.boolean()
  .invalid(true)
  .messages({
    'any.invalid': errorMessages.INVALID_LOGIN,
  })
};
