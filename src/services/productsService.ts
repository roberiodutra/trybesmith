import * as productsModel from '../models/productsModel';
import IProducts from '../interfaces/IProducts';

export const create = async (product: IProducts): Promise<IProducts> => {
  const createdProduct = await productsModel.create(product);
  return createdProduct;
};
