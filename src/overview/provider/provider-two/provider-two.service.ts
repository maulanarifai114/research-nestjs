import { Injectable } from '@nestjs/common';
import { ProviderDto } from '../dto/provider.dto.interface';

@Injectable()
export class ProviderTwoService {
  sendJson(): ProviderDto {
    return { message: 'Hello World! ProviderTwoService' };
  }
}
