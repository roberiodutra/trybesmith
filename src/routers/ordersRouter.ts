import express from 'express';
import * as ordersController from '../controllers/ordersController';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getAll);

export default ordersRouter;
