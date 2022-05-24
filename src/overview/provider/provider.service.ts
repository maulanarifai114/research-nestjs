import { Injectable } from '@nestjs/common';
import { ProviderDto } from './dto/provider.dto.interface';

@Injectable()
export class ProviderService {
  private providerArray: ProviderDto[] = [];

  create(payload: ProviderDto) {
    this.providerArray.push(payload);
  }

  findAll(): ProviderDto[] {
    return this.providerArray;
  }
}
