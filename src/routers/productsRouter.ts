import express from 'express';
import * as productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.getAll);

export default productsRouter;
