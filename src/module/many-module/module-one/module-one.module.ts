import { Module } from '@nestjs/common';
import { ModuleOneService } from './module-one.service';

@Module({
  providers: [ModuleOneService],
  exports: [ModuleOneService],
})
export class ModuleOneModule {}
