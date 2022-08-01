import { Request, Response } from 'express';
import CreateUser from '../services/CreateUserService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, avatar } = req.body;

    const createUser = new CreateUser();

    try {
      const user = await createUser.execute({ name, email, password, avatar });

      return res.json(user);
    } catch (error: any) {
      return res.status(error.statusCode ? error.statusCode : 500).send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }
}
