import { FindConditions } from 'typeorm';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

export default class ListProductService {
  public async execute(
    options?: FindConditions<Record<string, unknown>>
  ): Promise<Product[]> {
    // passing all "FindOptions<>" that may we use to search Products
    const productsRepository = new ProductRepository();

    const products = await productsRepository.find(options); //if no one is passed, method find() return all Products

    return products;
  }
}
