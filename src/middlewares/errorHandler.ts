import httpStatusCodes from '../helpers/httpStatusCodes';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
  res.status(
    err.details[0].type || httpStatusCodes,
  )
    .json({
      message: err.message,
    });
};

export default errorHandler;
