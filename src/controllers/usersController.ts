import { Request, Response, NextFunction } from 'express';
import * as usersService from '../services/usersService';
import httpStatus from '../helpers/httpStatusCodes';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await usersService.create(req.body);
    return res.status(httpStatus.CREATED).json(token);
  } catch (err) {
    next(err);
  }
};
