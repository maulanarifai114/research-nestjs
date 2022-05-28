import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return { message: 'user' };
  }

  @Get('use-middleware')
  getUseMiddleware() {
    return { message: 'use-middleware' };
  }

  @Get('non-middleware')
  getNonMiddleware() {
    return { message: 'non-middleware' };
  }
}
