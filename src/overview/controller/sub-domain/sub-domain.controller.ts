import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':localhost', version: '1.0.0' })
export class SubDomainController {
  /**
  # Sub Domain Routing
  **/
  @Get('subdomain')
  getSub(@HostParam('localhost') localhost: string) {
    return { message: 'This route uses a subdomain', localhost };
  }
}
