import {
  Injectable,
  InternalServerErrorException,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: NextFunction) {
    try {
      if (
        !req.headers['x-access-token'] ||
        req.headers['x-access-token'] === ''
      )
        throw new UnauthorizedException('Key x-access-token not found');
      const token = req.headers['x-access-token'];
      const data = jwt.verify(token, process.env.JWT_SIGN);

      req.data = data;

      next();
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
