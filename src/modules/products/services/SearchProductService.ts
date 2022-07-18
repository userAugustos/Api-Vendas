import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import errorTable from '@shared/errors/errorTable.json';
import { getCustomRepository } from 'typeorm';

export default class SearchProductService {
  public async execute(id: string): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError(`Product ${errorTable[404]}`, 404);
    }

    return product;
  }
}
