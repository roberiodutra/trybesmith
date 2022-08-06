import * as productsModel from '../models/productsModel';
import { IProducts } from '../interfaces/IProducts';
import schemas from '../schemas';

export const create = async (product: IProducts): Promise<IProducts> => {
  await schemas.product.validateAsync(product);
  const createdProduct = await productsModel.create(product);
  return createdProduct;
};

export const getAll = async (): Promise<IProducts[]> => {
  const products = productsModel.getAll();
  return products;
};
