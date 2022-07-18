import { FindConditions } from 'typeorm/find-options/FindConditions';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

export default class ListProductService {
  public async execute(options?: FindConditions<Product>): Promise<Product[]> {
    // passing all "FindOptions<Product>" that may we use to search Products
    const productsRepository = new ProductRepository();

    const products: Product[] = await productsRepository.find(options); //if no one is passed, method find() return all Products

    return products;
  }
}
