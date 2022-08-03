import productsModel from '../models/productsModel';
import IProducts from '../interfaces/IProducts';

const create = async (product: IProducts): Promise<IProducts> => {
  const createdProduct = await productsModel.create(product);
  return createdProduct;
};

export default { create };
