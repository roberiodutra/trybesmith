import * as ordersModel from '../models/ordersModel';

export const getAll = async () => {
  const ordersIds = await ordersModel.getAll();

  return ordersIds.map((item) => {
    const productsIds = item.productsIds.split(',').map(Number);
    return { ...item, productsIds };
  });
};
