import { ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/IUsers';
import connection from './connection';

export const create = async (u: IUsers): Promise<void> => {
  const query = `INSERT INTO Trybesmith.Users
  ( username, classe, level, password ) VALUES (?, ?, ?, ?)`;
  const values = [u.username, u.classe, u.level, u.password];

  await connection.execute<ResultSetHeader>(query, values);
};

export const getUser = async (body: IUsers): Promise<IUsers> => {
  const query = `SELECT * FROM Trybesmith.Users WHERE username=? AND password=?`;
  const values = [body.username, body.password];
  const [userData] = await connection.execute(query, values);
  return userData as IUsers[];
}
