import { Test, TestingModule } from '@nestjs/testing';
import { ProviderFourService } from './provider-four.service';

describe('ProviderFourService', () => {
  let service: ProviderFourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderFourService],
    }).compile();

    service = module.get<ProviderFourService>(ProviderFourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
