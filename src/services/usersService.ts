import * as usersModel from '../models/usersModel';
import { IUsers } from '../interfaces/IUsers';
import generateToken from '../helpers/JWTToken';
import schemas from '../schemas';

const create = async (user: IUsers): Promise<{ token: string }> => {
  await schemas.user.validateAsync(user);
  await usersModel.create(user);
  const token = generateToken(user);
  return { token };
};

export default { create };
