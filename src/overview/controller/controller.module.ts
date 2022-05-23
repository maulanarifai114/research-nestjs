import { Module } from '@nestjs/common';
import { ControllerService } from './controller.service';
import { ControllerController } from './controller.controller';
import { SubDomainController } from './sub-domain/sub-domain.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ControllerController, SubDomainController],
  providers: [ControllerService],
})
export class ControllerModule {}
