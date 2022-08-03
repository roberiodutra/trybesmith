import { ResultSetHeader } from 'mysql2';
import connection from '../helpers/connection';

const create = async (product): Promise => {
  const [data] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products
      (name, amount)
        VALUES (?, ?)`,
    [],
  );
  return data;
};

export default create;
