import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import AppError from '@shared/errors/AppError';
import errorTable from '@shared/errors/errorTable.json';
import { getCustomRepository } from 'typeorm';

export default class DeleteProductService {
  public async execute(id: string): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);

    if (!product) {
      throw new AppError(`Product ${errorTable[404]}`, 404);
    }

    return await productRepository.remove(product);
  }
}
