import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const userRouter = Router();
const controller = new UsersController();

userRouter.post('/', controller.create);
userRouter.get('/', isAuthenticated, controller.index);

export default userRouter;
