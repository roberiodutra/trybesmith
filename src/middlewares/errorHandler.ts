import { ErrorRequestHandler } from 'express';
import IStatusCodes from '../interfaces/IStatusCodes';

const statusCodes: IStatusCodes = {
  'any.required': 400,
  'any.invalid': 401,
};

const errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
  
  console.log("🚀 ~ file: errorHandler.ts ~ line 14 ~ consterrorHandler:ErrorRequestHandler= ~ err", err)

  const code = statusCodes[err.details[0].type as keyof typeof statusCodes];

  res.status(code)
    .json({
      message: err.message,
    });
};

export default errorHandler;
