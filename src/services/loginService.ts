import { getUser } from '../models/usersModel';
import { generateToken } from '../helpers/JWTToken';
import IUsers from '../interfaces/IUsers';

const login = async (body: IUsers): Promise<{ token: string }> => {
  const userExists = await getUser(body);
  const token = generateToken(body);
  return { token };
};

export default { login };
