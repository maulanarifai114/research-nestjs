import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { QueryException } from 'src/exception/query.exception';

@Controller('user')
export class UserController {
  @Get()
  get(@Query() query: { one: number; two: number }) {
    try {
      const { one, two } = query;
      if (!one || !two) {
        throw new Error('Missing one or two');
      }
      return { result: +one + +two };
    } catch (error) {
      console.log(error);
      throw new QueryException();
    }
  }
}
