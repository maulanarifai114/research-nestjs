import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto.interface';
import { ProviderTwoService } from './provider-two/provider-two.service';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(
    private readonly providerService: ProviderService,
    private providerTwoService: ProviderTwoService,
    @Inject('SERVICE_THREE') private providerThreeService: string,
  ) {}

  @Get()
  getProvider(): ProviderDto[] {
    return this.providerService.findAll();
  }

  @Post('create')
  postProvider(): ProviderDto[] {
    this.providerService.create({ message: 'Hello World!' });
    this.providerService.create({ message: 'Hello World2!' });
    return this.providerService.findAll();
  }

  @Get('two')
  getProviderTwo(): ProviderDto[] {
    return [
      this.providerTwoService.sendJson(),
      { message: this.providerThreeService },
    ];
  }
}
