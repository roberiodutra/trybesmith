import { ErrorRequestHandler } from 'express';

enum statusCodes {
  'any.required' = 400,
  'any.invalid' = 401,
  'string.base' = 422,
  'string.min' = 422,
  'number.base' = 422,
  'number.min' = 422,
  'string.empty' = 401,
  'array.base' = 422,
  'array.min' = 422,
};

const errorHandler: ErrorRequestHandler = async (err, _req, res, _next) => {
  const code = statusCodes[err.details[0].type as keyof typeof statusCodes];

  res.status(code || 500)
    .json({
      message: err.message,
    });
};

export default errorHandler;
