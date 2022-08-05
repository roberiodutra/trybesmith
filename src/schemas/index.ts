import Joi from "joi"
import httpStatus from '../helpers/httpStatusCodes';
import errorMessages from "../helpers/errorMessages";

export default {
  bodyVal: Joi.object({
    username: Joi.string()
      .required(),
    password: Joi.string()
      .required()
  }),
};
