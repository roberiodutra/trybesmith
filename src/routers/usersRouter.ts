import express from 'express';
import * as usersController from '../controllers/usersController';

const usersRouter = express.Router();

usersRouter.post('/', usersController.create);

export default usersRouter;
