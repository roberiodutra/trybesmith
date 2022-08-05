import { getUser } from '../models/usersModel';
import { generateToken } from '../helpers/JWTToken';
import IUsers from '../interfaces/IUsers';
import schemas from '../schemas'

const login = async (body: IUsers): Promise<{ token: string }> => {
  await schemas.body.validateAsync(body);
  const userExists = await getUser(body);
  await schemas.checkBool.validateAsync(userExists.length === 0);
  const token = generateToken(body);
  return { token };
};

export default { login };
