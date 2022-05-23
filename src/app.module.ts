import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './overview/controller/controller.module';
import { ProviderModule } from './overview/provider/provider.module';

@Module({
  imports: [ControllerModule, ProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
