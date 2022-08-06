import { sign, SignOptions, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUsers } from '../interfaces/IUsers';

dotenv.config();

const SECRET: Secret = process.env.JWT_SECRET || 'vnetod';

const jwtConfig: SignOptions = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateToken = (payload: IUsers) =>
  sign(payload, SECRET, jwtConfig);

export default generateToken;
