import connection from './connection';

export const getAll = async () => {
  const query = 
    `SELECT orders.id, orders.userId,
    GROUP_CONCAT(products.id) AS products
    FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON orders.id = products.orderId
    GROUP BY orders.id`;
  const [data] = await connection.execute(query);
  return data;
};
