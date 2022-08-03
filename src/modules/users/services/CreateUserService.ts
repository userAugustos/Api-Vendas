import AppError from '@shared/errors/AppError';
import errorTable from '@shared/errors/errorTable.json';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';
import { CreateUserRequest } from '../types/user';

export default class CreateUser {
  public async execute({
    name,
    email,
    password,
    avatar,
  }: CreateUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userExists = await usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError(
        `${errorTable[406]} there is already one user with this email`, // errormessage
        406
      );
    }

    const hasedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hasedPassword,
      avatar,
    });

    await usersRepository.save(user);

    return user;
  }
}
