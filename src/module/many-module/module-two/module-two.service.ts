import { Injectable } from '@nestjs/common';
// import { ModuleOneService } from '../module-one/module-one.service';

@Injectable()
export class ModuleTwoService {
  // constructor(private moduleOneService: ModuleOneService) {}

  sendJson() {
    /* Cannot Do This, because ModuleOneModule not import in ModuleTwoModule ⬇ */
    // return (
    //   'Hello from ModuleTwoService' + ' ' + this.moduleOneService.sendJson()
    // );

    /* Do This ⬇ */
    return 'Hello from ModuleTwoService';
  }
}
