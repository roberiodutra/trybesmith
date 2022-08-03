import express from 'express';

const productsRouter = express.Router();
import * as productsController from '../controllers/productsController';

productsRouter.post('/', productsController.create);
productsRouter.get('/', productsController.getAll);

export default productsRouter;
