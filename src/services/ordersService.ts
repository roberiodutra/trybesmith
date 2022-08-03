import * as ordersModel from '../models/ordersModel';

export const getAll = async () => {
  const orders = await ordersModel.getAll();

  return orders.map((item) => {
    const productsIds = item.productsIds.split(',').map(Number);
    return { ...item, productsIds };
  });
};
