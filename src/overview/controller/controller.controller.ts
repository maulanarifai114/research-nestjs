import { HttpService } from '@nestjs/axios';
import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ControllerOutput } from './controller.dto';
import { ControllerService } from './controller.service';

@Controller('controller')
export class ControllerController {
  constructor(private readonly controllerService: ControllerService, private httpService: HttpService) {}

  /**
  # Routing, Request Object, Route Parameters

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
  getQuery(@Req() request: Request, @Query() query: { limit: string }, @Query('page') page: string): ControllerOutput {
    const { search } = request.query;
    const { limit } = query;
    return { message: `This action returns get controller query search=${search} limit=${limit} page=${page}` };
  }
  @Get('param/:id/:code/:username')
  getParam(@Req() request: Request, @Param() param: { code: string }, @Param('username') username): ControllerOutput {
    const { id } = request.params;
    const { code } = param;
    return { message: `This action returns get controller query id=${id} code=${code} username=${username}` };
  }

  /**
  # Route Wildcard
  **/
  @Get('wild*card')
  getWildcard(): ControllerOutput {
    return { message: 'This route uses a wildcard' };
  }

  /**
  # Custom HttpCode
  **/
  @Post()
  @HttpCode(202)
  post(): ControllerOutput {
    return { message: 'This route post with custom status code 202' };
  }

  /** 
  # Response Headers
  **/
  @Post('headers')
  @Header('X-Powered-By', 'Raden')
  postHeader(): ControllerOutput {
    return { message: 'This action post headers' };
  }

  /** 
  Redirection

  ## Redirect to a specific route with a specific status code
  if return url + statusCode, then it will return messageCode with url
  ex. { url: 'https://google.com', statusCode: 202 } ==> "Accepted. Redirecting to https://google.com"

  ## Redirect to a specific route without a specific status code
  if return url, then it will return page which redirect to url
  ex. { url: 'https://google.com' } ==> Return Google Page
  **/
  @Get('redirection')
  @Redirect('https://docs.nestjs.com', 302)
  getRedirect(@Query('google') google: string, @Query('statusCode') statusCode: string) {
    if (google === 'true' && statusCode) return { url: 'https://google.com', statusCode: +statusCode };
    if (google === 'true') return { url: 'https://google.com' };
  }

  /** 
  # Asynchronicity
  **/
  @Get('async')
  async getAsync(@Res() res: Response) {
    const users = await this.controllerService.getUsers().toPromise();
    res.json({ message: 'This action returns get controller async', users: users.data });
  }
}
