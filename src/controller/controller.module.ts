import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OneMiddleware } from 'src/middleware/one.middleware';
import { ProductController } from './product/product.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [UserController, ProductController],
})
export class ControllerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(OneMiddleware)
      .exclude('/user/non-middleware', {
        method: RequestMethod.ALL,
        path: '/product/detail',
      })
      .forRoutes(UserController, ProductController);
  }
}
