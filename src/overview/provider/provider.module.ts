import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderTwoService } from './service/provider-two/provider-two.service';
import { ProviderThreeService } from './service/provider-three/provider-three.service';
import { ProviderFourService } from './service/provider-four/provider-four.service';
import { ProviderOneService } from './service/provider-one/provider-one.service';
import { ProviderFiveService } from './service/provider-five/provider-five.service';

@Module({
  controllers: [ProviderController],
  providers: [
    ProviderOneService,
    {
      provide: ProviderTwoService,
      useClass: ProviderTwoService,
    },
    {
      provide: 'SERVICE_THREE',
      useClass: ProviderThreeService,
    },
    {
      provide: 'SERVICE_FOUR',
      useClass: ProviderFourService,
    },
    ProviderFiveService,
    {
      provide: 'SERVICE_FIVE_ALIAS',
      useExisting: ProviderFiveService,
    },
    {
      provide: 'VALUE_ONE',
      useValue: 'Value One',
    },
    {
      provide: 'VALUE_TWO',
      useValue: 'Value Two',
    },
    {
      provide: 'FACTORY_ONE',
      useFactory: (paramOne: string, paramTwo: string, paramThree: ProviderOneService): string => {
        return `Factory One, ${paramOne}, ${paramTwo}, ${paramThree.sendJson().message}`;
      },
      inject: [{ token: 'VALUE_ONE', optional: false }, 'VALUE_TWO', ProviderOneService],
    },
    {
      provide: 'FACTORY_TWO',
      useFactory: (): string => 'Factory Two',
    },
  ],
})
export class ProviderModule {}
