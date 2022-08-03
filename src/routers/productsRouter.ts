import express from 'express';

const productsRouter = express.Router();
import productsController from '../controllers/productsController';

productsRouter.post('/', productsController.create);

export default productsRouter;
