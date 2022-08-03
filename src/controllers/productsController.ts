import { Request, Response, NextFunction } from 'express';
import * as productsService from '../services/productsService';
import httpStatusCodes from '../helpers/httpStatusCodes';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdProduct = await productsService.create(req.body);
    return res.status(httpStatusCodes.CREATED).json(createdProduct);
  } catch (err) {
    next(err);
  }
};
