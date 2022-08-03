import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProducts from '../interfaces/IProducts';

const create = async (product: IProducts): Promise<IProducts> => {
  const query = `INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)`;
  const values = [product.name, product.amount];

  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, values);

  return { id: insertId, ...product };
};

export default { create };
