import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/product';

@EntityRepository(Product) // passing the entitie that the repository will use and affect
export class ProductRepository extends Repository<Product> {
  // methods
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
