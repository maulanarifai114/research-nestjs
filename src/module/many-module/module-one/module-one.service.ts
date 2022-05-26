import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleOneService {
  sendJson() {
    return 'Hello from ModuleOneService';
  }
}
