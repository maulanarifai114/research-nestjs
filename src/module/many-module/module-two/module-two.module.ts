import { Module } from '@nestjs/common';
import { ModuleTwoService } from './module-two.service';

@Module({
  providers: [ModuleTwoService],
  exports: [ModuleTwoService],
})
export class ModuleTwoModule {}
