import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';

@Module({
  controllers: [ProviderController],
  providers: [
    {
      provide: ProviderService,
      useClass: ProviderService,
      useValue: {
        providerArray: [{ message: 'Hello Mars!' }],
      },
    },
  ],
})
export class ProviderModule {}
