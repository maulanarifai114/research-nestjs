import { Module } from '@nestjs/common';
import { ManyModuleModule } from 'src/module/many-module/many-module.module';
import { UserController } from './user.controller';

@Module({
  imports: [ManyModuleModule],
  controllers: [UserController],
})
export class UserModule {}
