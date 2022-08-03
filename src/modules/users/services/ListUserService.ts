import { FindConditions, getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

export default class ListUsers {
  public async execute(
    options?: FindConditions<Record<string, unknown>>
  ): Promise<User[]> {
    // passing all "FindOptions<>" that may we use to search Products
    const UserRepository = getCustomRepository(UsersRepository);

    const users = await UserRepository.find(options); //if no one is passed, method find() return all Products

    return users;
  }
}
