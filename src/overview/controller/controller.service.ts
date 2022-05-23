import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ControllerService {
  constructor(private httpService: HttpService) {}

  getUsers() {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }
}
