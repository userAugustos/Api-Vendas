import AppError from '@shared/errors/AppError';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore --adding ignore because of the json import error--
import errorTable from '@shared/errors/errorTable';

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
