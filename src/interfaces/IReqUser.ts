import { Request } from 'express';

export default interface IReqUser extends Request {
  user?: any,
};
