import { Controller, Get } from '@nestjs/common';
import { GenerateIdService } from 'src/module/global/generate-id/generate-id.service';
import { ModuleOneService } from 'src/module/many-module/module-one/module-one.service';
import { ModuleTwoService } from 'src/module/many-module/module-two/module-two.service';

@Controller('user')
export class UserController {
  constructor(
    private genId: GenerateIdService,
    private moduleOneService: ModuleOneService,
    private moduleTwoService: ModuleTwoService,
  ) {}
  @Get()
  getUser() {
    return [
      { id: this.genId.generateId(), name: 'Jane' },
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: this.moduleOneService.sendJson() },
      { id: 4, name: this.moduleTwoService.sendJson() },
    ];
  }
}
