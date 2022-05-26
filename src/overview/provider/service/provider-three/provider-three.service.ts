import { Injectable } from '@nestjs/common';
import { ProviderDto } from '../../dto/provider.dto.interface';

@Injectable()
export class ProviderThreeService {
  sendJson(): ProviderDto {
    return { message: 'Hello World 3' };
  }
}
