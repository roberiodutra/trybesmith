import { Request, Response, NextFunction } from 'express';
import productsService from '../services/productsService';
import httpStatusCodes from '../helpers/httpStatusCodes';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdProduct = await productsService.create(req.body);
    return res.status(httpStatusCodes.CREATED).json(createdProduct);
  } catch (err) {
    next(err);
  }
};

export default { create };
