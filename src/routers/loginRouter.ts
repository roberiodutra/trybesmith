import express from 'express';
import loginController from '../controllers/loginController';

const loginRouter = express.Router();

loginRouter.get('/', loginController);

export default loginRouter;
