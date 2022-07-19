import AppError from '@shared/errors/AppError';
import errorTable from '@shared/errors/errorTable.json';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import IUpdateProductRequest from '../types/UpdateProductType';
import ListProductService from './ListProductService';
import SearchProductService from './SearchProductService';

export default class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    quantity,
  }: IUpdateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);
    const searchProduct = new SearchProductService();
    const listProduct = new ListProductService();

    const product = await searchProduct.execute(id);

    const productsExists = await listProduct.execute({ where: { name } }); // return an array, even if is only 1 product

    if (productsExists[0] && name !== product.name) {
      // verify if exists a product with the name has been passed, and of course, if it's not already the name of the project it's to be changed
      throw new AppError(
        `${errorTable[406]} there is already one product with this name`,
        406 // errorcode
      );
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}
