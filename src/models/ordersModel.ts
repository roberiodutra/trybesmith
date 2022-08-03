import { IOrders } from '../interfaces/IOrders';
import connection from './connection';

export const getAll = async (): Promise<IOrders[]> => {
  const query = 
    `SELECT orders.id, orders.userId,
    GROUP_CONCAT(productsIds.id) AS productsIds
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS productsIds
    ON orders.id = productsIds.orderId
    GROUP BY orders.id
    ORDER BY orders.userId ASC`;
  const [data] = await connection.execute(query);
  return data as IOrders[];
};
