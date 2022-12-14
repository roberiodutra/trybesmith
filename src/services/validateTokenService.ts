import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import errorMessages from '../helpers/errorMessages';
import schemas from '../schemas';
import { IReqUser } from '../interfaces/IReqUser';

dotenv.config();

class StatusError extends Error {
  details?: unknown;
}

const SECRET: Secret = process.env.JWT_SECRET || 'vnetod';

const validate = async (req: IReqUser): Promise<void> => {
  const token = req.headers.authorization || '';

  await schemas.token.validateAsync({ token });

  jwt.verify(token, SECRET, (error: any, user: any) => {
    if (error) {
      const newError = new StatusError(errorMessages.InvalidToken);
      newError.details = [{ type: 'any.invalid' }];
      throw newError;
    }
    req.user = user;
  });
};

export default { validate };
