import * as ordersModel from '../models/ordersModel';
import { IOrders } from '../interfaces/IOrders';

export const getAll = async (): Promise<IOrders[]> => {
  const ordersIds = await ordersModel.getAll();

  return ordersIds.map((item: any) => {
    const productsIds = item.productsIds.split(',').map(Number)
    return { ...item, productsIds }
  });
};
