import { Inject, Injectable } from '@nestjs/common';
import { Config } from './config.interface';
import { CONFIG_OPTIONS } from './config.provide';

@Injectable()
export class ConfigService {
  constructor(@Inject(CONFIG_OPTIONS) private configOptions: Config) {}

  config(): { options: Config } {
    return { options: this.configOptions };
  }
}
