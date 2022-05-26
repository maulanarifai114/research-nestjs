import { Module } from '@nestjs/common';
import { ModuleOneModule } from './module-one/module-one.module';
import { ModuleTwoModule } from './module-two/module-two.module';

@Module({
  imports: [ModuleOneModule, ModuleTwoModule],
  exports: [ModuleOneModule, ModuleTwoModule],
})
export class ManyModuleModule {}
