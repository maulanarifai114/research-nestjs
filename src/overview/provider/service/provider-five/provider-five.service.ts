import { Injectable } from '@nestjs/common';
import { ProviderDto } from '../../dto/provider.dto.interface';

@Injectable()
export class ProviderFiveService {
  sendJson(): ProviderDto {
    return { message: 'Hello World 5' };
  }
}
