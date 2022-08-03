import { ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/IUsers';
import connection from './connection';

export const create = async (u: IUsers): Promise<void> => {
  const query = `INSERT INTO Trybesmith.Users
  ( username, classe, level, password ) VALUES (?, ?, ?, ?)`;
  const values = [u.username, u.classe, u.level, u.password];

  await connection.execute<ResultSetHeader>(query, values);
};
