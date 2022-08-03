import { Request, Response, NextFunction } from 'express';
import * as usersService from '../services/usersService';
import httpStatusCodes from '../helpers/httpStatusCodes';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await usersService.create(req.body);
    return res.status(httpStatusCodes.CREATED).json(token);
  } catch (err) {
    next(err);
  }
};
