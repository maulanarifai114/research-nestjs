import { Test, TestingModule } from '@nestjs/testing';
import { ModuleTwoService } from './module-two.service';

describe('ModuleTwoService', () => {
  let service: ModuleTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleTwoService],
    }).compile();

    service = module.get<ModuleTwoService>(ModuleTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
