import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { ProviderTwoService } from './provider-two/provider-two.service';

@Module({
  controllers: [ProviderController],
  providers: [
    ProviderService,
    {
      provide: ProviderTwoService,
      useClass: ProviderTwoService,
    },
    {
      provide: 'SERVICE_THREE',
      useValue: 'Service Three',
    },
  ],
})
export class ProviderModule {}
