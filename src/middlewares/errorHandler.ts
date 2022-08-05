import httpStatus from '../helpers/httpStatusCodes';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
  if (err.details[0].type === 'any.required') {
    res.status(httpStatus.BAD_REQUEST)
      .json({
        message: err.message,
      });
  }
};

export default errorHandler;
