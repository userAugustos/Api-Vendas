import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const userRouter = Router();
const controller = new UsersController();

userRouter.post('/', controller.create);
userRouter.get('/', controller.index);

export default userRouter;
