import { getUser } from '../models/usersModel';
import { generateToken } from '../helpers/JWTToken';
import IUsers from '../interfaces/IUsers';
import schemas from '../schemas'

const login = async (body: IUsers): Promise<{ token: string }> => {
  await schemas.bodyVal.validateAsync(body);
  // const userExists = await getUser(body);
  const token = generateToken(body);
  return { token };
};

export default { login };