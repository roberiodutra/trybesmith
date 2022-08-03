import { Request, Response, NextFunction } from 'express';
import * as ordersService from '../services/ordersService';
import httpStatus from '../helpers/httpStatusCodes';

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordersService.getAll();
    return res.status(httpStatus.OK).json(orders);
  } catch (err) {
    next(err);
  }
};
