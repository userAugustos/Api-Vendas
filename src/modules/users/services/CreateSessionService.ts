import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UserRepository';
import { ISessionRequest, ISessionResponse } from '../types/autenticate';

class CreateUserSession {
  public async execute({ email, password }: ISessionRequest): Promise<ISessionResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password', 401);
    }

    return {
      user,
    };
  }
}

export default CreateUserSession;
