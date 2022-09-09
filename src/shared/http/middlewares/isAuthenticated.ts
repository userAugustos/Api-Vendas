import { jwtConfig } from '@config/auth';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      status: 'error',
      message: 'JWT Token is missing.',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodeToken = verify(token, jwtConfig.secret);

    return next();
  } catch (err: any) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid JWT Token.',
    });
  }
}
