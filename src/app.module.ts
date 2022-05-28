import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './module/global/global.module';
import { UserModule } from './controller/user/user.module';
import { ManyModuleModule } from './module/many-module/many-module.module';
import { DynamicConfigModule } from './module/dynamic-config/dynamic-config.module';

@Module({
  imports: [
    GlobalModule,
    UserModule,
    ManyModuleModule,
    DynamicConfigModule.forRoot({
      ext: 'ext string',
      folder: 'folder string',
      file: 'file string',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
