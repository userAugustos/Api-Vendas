import { Request, Response } from 'express';
import CreateUserSession from '../services/CreateSessionService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = new CreateUserSession();

    try {
      const user = await createSession.execute({ email, password });

      return res.json(user);
    } catch (error: any) {
      const code = error.statusCode ? error.statusCode : 500;
      return res.status(code).send({
        statusCode: code,
        message: error?.message,
      });
    }
  }
}
