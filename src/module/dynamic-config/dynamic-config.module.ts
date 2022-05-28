import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './config/config.provide';
import { Config } from './config/config.interface';
import { ConfigService } from './config/config.service';

@Global()
@Module({
  providers: [ConfigService],
})
export class DynamicConfigModule {
  static forRoot(options: Config): DynamicModule {
    return {
      module: DynamicConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
