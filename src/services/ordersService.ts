import * as ordersModel from '../models/ordersModel';
import * as productsModel from '../models/productsModel';
import schemas from '../schemas';

export const getAll = async () => {
  const orders = await ordersModel.getAll();

  return orders.map((item) => {
    const productsIds = item.productsIds.split(',').map(Number);
    return { ...item, productsIds };
  });
};

export const create = async (userId: number, productsIds: number[]) => {
  await schemas.order.validateAsync({ productsIds });
  const orderId = await ordersModel.create(userId);

  await Promise.all(
    productsIds.map((product) => (
      productsModel.update(orderId, product)
    )),
  );

  return { userId, productsIds };
};
