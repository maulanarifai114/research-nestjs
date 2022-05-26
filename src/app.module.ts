import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './module/global/global.module';
import { UserModule } from './controller/user/user.module';
import { ManyModuleModule } from './module/many-module/many-module.module';
import { DynamiccModule } from './module/dynamic/dynamic.module';

@Module({
  imports: [GlobalModule, UserModule, ManyModuleModule, DynamiccModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
