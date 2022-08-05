import { Request, Response, NextFunction } from 'express';
import loginService from "../services/loginService";
import httpStatus from '../helpers/httpStatusCodes';

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction): Promise<Response | void> => {
  try {
    const token = await loginService.login(req.body);
    return res.status(httpStatus.OK).json(token);
  } catch (err) {
    console.log("🚀 ~ file: loginController.ts ~ line 13 ~ err", err)
    next(err);
  }
};

export default loginController;
