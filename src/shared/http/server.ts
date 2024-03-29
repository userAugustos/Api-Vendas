import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm'; // calling index in typeorm, and access all configs

const app = express(); // instance of express

app.use(cors()); // no param in cors, so accepting all ports and requests
app.use(express.json());
app.use(routes);

// temp. middleware to errors
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  // in this case, i don't know exactly why, but i need this 4 params to be passed exactly this way ^
  if (error instanceof AppError) {
    // when error is a instance of your class, we can return directly
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

// eslint-disable-next-line no-console
app.listen(3333, () => console.debug('Server listening on port: 3333'));
