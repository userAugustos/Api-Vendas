// our service wiil be a class with an instance of our repository, them we will manipulate our data

import AppError from '@shared/errors/AppError';
import errorTable from '@shared/errors/errorTable.json';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import { ICreateProductRequest } from '../types/CreateProductTypes';

export default class CreateProductService {
  // every service will have one method, it's a pattern of how it's been teach in clas
  public async execute({ name, price, quantity }: ICreateProductRequest) {
    // now we need acess the repository, make the business rules to execute the service
    const productsRepository = getCustomRepository(ProductRepository);

    const productsExists = await productsRepository.findByName(name);

    if (productsExists) {
      throw new AppError(
        `${errorTable[406]} there is already one product with this name`, // errormessage
        406 // errorcode
      );
    }
    // so if this product donsn't exists, let's create
    const product = productsRepository.create({
      name,
      price,
      quantity,
    });

    await productsRepository.save(product); // and then, inserting in the db

    return product;
  }
}
