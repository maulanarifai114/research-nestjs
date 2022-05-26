import { Global, Module } from '@nestjs/common';
import { GenerateIdService } from './generate-id/generate-id.service';

@Global()
@Module({
  providers: [GenerateIdService],
  exports: [GenerateIdService],
})
export class GlobalModule {}
