import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const controller = new ProductsController();

productsRouter.get('/', controller.index); // so jsut passing the controller and his methods to routers, then we can access
productsRouter.get('/:id', controller.search);
productsRouter.post('/', controller.create);
productsRouter.put('/:id', controller.update);
productsRouter.delete('/:id', controller.delete);

export default productsRouter;
