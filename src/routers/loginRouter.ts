import express from 'express';
import * as loginController from '../controllers/loginController';

const loginRouter = express.Router();

loginRouter.post('/', loginController);

export default loginRouter;
