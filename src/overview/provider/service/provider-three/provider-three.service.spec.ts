import { Test, TestingModule } from '@nestjs/testing';
import { ProviderThreeService } from './provider-three.service';

describe('ProviderThreeService', () => {
  let service: ProviderThreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderThreeService],
    }).compile();

    service = module.get<ProviderThreeService>(ProviderThreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
