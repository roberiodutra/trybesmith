import express from 'express';
import ordersController from '../controllers/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.create('/', ordersController.create);

export default ordersRouter;
