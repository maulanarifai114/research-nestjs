import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateIdService {
  generateId(): string {
    return Math.random().toString(36).slice(2).toUpperCase();
  }
}
