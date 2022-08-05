import * as usersModel from '../models/usersModel';
import IUsers from '../interfaces/IUsers';
import { generateToken } from '../helpers/JWTToken';

export const create = async (user: IUsers): Promise<{ token: string }> => {
  await usersModel.create(user);
  const token = generateToken(user);
  return { token };
};
