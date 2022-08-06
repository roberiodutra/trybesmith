import { Request, Response, NextFunction } from 'express';
import * as ordersService from '../services/ordersService';
import httpStatus from '../helpers/httpStatusCodes';
import validateTokenService from '../services/validateTokenService';
import { IReqUser } from '../interfaces/IReqUser';

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordersService.getAll();
    return res.status(httpStatus.OK).json(orders);
  } catch (err) {
    next(err);
  }
};

export const create = async (
  req: IReqUser,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  try {
    await validateTokenService.validate(req);
    const created = await ordersService.create(req.user.id, req.body.productsIds);
    return res.status(httpStatus.CREATED).json(created);
  } catch (err) {
    next(err);
  }
};
