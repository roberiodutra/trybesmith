import jwt, { Secret } from 'jsonwebtoken';
import { Request } from 'express';
import dotenv from 'dotenv';
import errorMessages from '../helpers/errorMessages';
import schemas from '../schemas';

dotenv.config();

export interface IReqUser extends Request {
  user?: any,
};

class StatusError extends Error {
  details?: any;
}

const SECRET: Secret = process.env.JWT_SECRET || '';

const validate = async (req: IReqUser): Promise<void> => {
  const token = req.headers.authorization || '';

  await schemas.token.validateAsync({ token });

  jwt.verify(token, SECRET, (error: any, user: any) => {
    if (error) {
      const newError = new StatusError(errorMessages.INVALID_TOKEN);
      newError.details = [{ type: 'any.invalid' }];
      throw newError;
    }
    req.user = user;
  });
};

export default { validate };
