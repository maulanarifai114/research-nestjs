import { DynamicModule, Module } from '@nestjs/common';
import { Config } from './config';

@Module({
  providers: [Config],
})
export class DynamiccModule {
  static forRoot(entities = [], options?: object): DynamicModule {
    return {
      module: DynamiccModule,
      providers: [Config],
      exports: [Config],
    };
  }
}
