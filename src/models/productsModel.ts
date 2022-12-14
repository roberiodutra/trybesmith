import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { IProducts } from '../interfaces/IProducts';

export const create = async (product: IProducts): Promise<IProducts> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [product.name, product.amount];

  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);

  return { id: insertId, ...product };
};

export const getAll = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products ORDER BY id ASC';
  const [data] = await connection.execute(query);
  return data as IProducts[];
};

export const update = async (orderId: number, id: number): Promise<void> => {
  const query = 'UPDATE Trybesmith.Products SET orderId=? WHERE id=?';
  const values = [orderId, id];
  await connection.execute(query, values);
};
