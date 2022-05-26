import { Test, TestingModule } from '@nestjs/testing';
import { ModuleOneService } from './module-one.service';

describe('ModuleOneService', () => {
  let service: ModuleOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleOneService],
    }).compile();

    service = module.get<ModuleOneService>(ModuleOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
