import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ControllerOutput } from './controller.dto';
import { ControllerService } from './controller.service';

@Controller('controller')
export class ControllerController {
  constructor(private readonly controllerService: ControllerService) {}

  /**
  - Response can be send with res.json() or just return the value.
  - Request can be get with @Req() or @Query(), and etc https://docs.nestjs.com/controllers#request-object
  **/
  @Get()
  get(): ControllerOutput {
    return { message: 'This action returns get controller' };
  }
  @Get('express')
  getExpress(@Res() res: Response): void {
    res.status(202).json({ message: 'This action returns get controller express' });
  }
  @Get('query')
  getQuery(@Req() request: Request, @Query() query): ControllerOutput {
    const { search } = request.query;
    const { limit } = query;
    return { message: `This action returns get controller query search=${search} limit=${limit}` };
  }
  @Get('param/:id/:code')
  getParam(@Req() request: Request, @Param() param): ControllerOutput {
    const { id } = request.params;
    const { code } = param;
    return { message: `This action returns get controller query id=${id} code=${code}` };
  }

  /**
  Route Wildcard
  **/
  @Get('wild*card')
  getWildcard(): ControllerOutput {
    return { message: 'This route uses a wildcard' };
  }

  /**
  Custom HttpCode
  **/
  @Post()
  @HttpCode(202)
  post(): ControllerOutput {
    return { message: 'This route post with custom status code 202' };
  }

  /** 
  Response Headers
  **/
  @Post('headers')
  @Header('X-Powered-By', 'Raden')
  postHeader(): ControllerOutput {
    return { message: 'This action post headers' };
  }

  /** 
  Redirection

  **/
  @Get('redirection')
  @Redirect('https://docs.nestjs.com', 302)
  getRedirect(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://google.com' };
    }
    return { message: 'This action redirect to docs' };
  }
}
