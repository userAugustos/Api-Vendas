import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  // so, index req
  return res.json({ message: 'Hello world' });
});

routes.use('/products', productsRouter); // here we define to every thime, access our api with /products, go to our products router, that access the productController methods

export default routes;
