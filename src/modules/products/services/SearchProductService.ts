import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import errorTable from '@shared/errors/errorTable.json';

export default class SearchProductService {
  public async execute(id: string): Promise<Product> {
    const productsRepository = new ProductRepository();

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError(`Product ${errorTable[404]}`, 404);
    }

    return product;
  }
}
