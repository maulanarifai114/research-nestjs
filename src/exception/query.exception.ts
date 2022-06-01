import { BadRequestException, HttpException, HttpStatus } from '@nestjs/common';

export class QueryException extends BadRequestException {
  constructor() {
    super('Custom Message', 'QueryException');
  }
}
