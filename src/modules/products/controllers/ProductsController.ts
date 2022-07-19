import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import SearchProductService from '../services/SearchProductService';
import UpdateProductService from '../services/UpdateProductService';

export default class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();

    try {
      return response.json(products);
    } catch (error: any) {
      return response.send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const searchProduct = new SearchProductService();

    try {
      return response.json(await searchProduct.execute(id));
    } catch (error: any) {
      return response.send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductService();

    try {
      const product = await createProduct.execute({ name, price, quantity }); // the way i think it's more legible

      return response.json(product);
    } catch (error: any) {
      return response.send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProduct = new DeleteProductService();

    try {
      return response.json(await deleteProduct.execute(id));
    } catch (error: any) {
      return response.send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    // const { name, price, quantity } = request.body;

    const updateProduct = new UpdateProductService();

    try {
      return response.json(await updateProduct.execute({ id, ...request.body })); // it may work great, let's try
    } catch (error: any) {
      return response.send({
        statusCode: error.statusCode ? error.statusCode : 500,
        message: error?.message,
      });
    }
  }
}
