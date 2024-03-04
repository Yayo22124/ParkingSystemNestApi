import * as morgan from 'morgan';

import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    morgan('combined')(req, res, next);
  }
}
