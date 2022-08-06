import { Request, Response, NextFunction } from 'express';
import * as productsService from '../services/productsService';
import httpStatus from '../helpers/httpStatusCodes';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdProduct = await productsService.create(req.body);
    return res.status(httpStatus.Created).json(createdProduct);
  } catch (err) {
    next(err);
  }
};

export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productsService.getAll();
    return res.status(httpStatus.Ok).json(products);
  } catch (err) {
    next(err);
  }
};
