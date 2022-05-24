import { Controller, Get, Post } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto.interface';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

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
}
