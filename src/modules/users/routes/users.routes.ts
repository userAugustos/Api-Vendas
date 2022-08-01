import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const userRouter = Router();
const controller = new UsersController();

userRouter.post('/', controller.create);

export default userRouter;
