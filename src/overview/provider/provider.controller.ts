import { Controller, Get, Inject } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto.interface';
import { ProviderOneService } from './service/provider-one/provider-one.service';
import { ProviderTwoService } from './service/provider-two/provider-two.service';
import { ProviderThreeService } from './service/provider-three/provider-three.service';
import { ProviderFourService } from './service/provider-four/provider-four.service';
import { ProviderFiveService } from './service/provider-five/provider-five.service';

@Controller('provider')
export class ProviderController {
  constructor(private serviceOne: ProviderOneService, private serviceTwo: ProviderTwoService, @Inject('SERVICE_THREE') private serviceThree: ProviderThreeService, private serviceFive: ProviderFiveService) {}

  @Inject('SERVICE_FOUR') serviceFour: ProviderFourService;
  @Inject('SERVICE_FIVE_ALIAS') serviceFiveAlias: ProviderFiveService;

  @Inject('FACTORY_ONE') factoryOne: string;
  @Inject('FACTORY_TWO') factoryTwo: string;

  @Inject('VALUE_ONE') valueOne: string;

  @Get()
  getProviderService(): ProviderDto[] {
    return [this.serviceOne.sendJson(), this.serviceTwo.sendJson(), this.serviceThree.sendJson(), this.serviceFour.sendJson(), { message: this.valueOne }, { message: this.factoryOne }, { message: this.factoryTwo }, this.serviceFive.sendJson(), this.serviceFiveAlias.sendJson()];
  }
}
