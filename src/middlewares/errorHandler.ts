import httpStatus from '../helpers/httpStatusCodes';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
  
  console.log("🚀 ~ file: errorHandler.ts ~ line 14 ~ consterrorHandler:ErrorRequestHandler= ~ err", err)

  if (err.details[0].type === 'any.required') {
    res.status(httpStatus.BAD_REQUEST)
      .json({
        message: err.message,
      });
  }

  if (err.details[0].type === 'any.invalid') {
    res.status(httpStatus.UNAUTHORIZED)
      .json({
        message: err.message,
      });
  }
};

export default errorHandler;
