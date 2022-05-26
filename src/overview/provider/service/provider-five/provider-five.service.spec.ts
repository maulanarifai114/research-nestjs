import { Test, TestingModule } from '@nestjs/testing';
import { ProviderFiveService } from './provider-five.service';

describe('ProviderFiveService', () => {
  let service: ProviderFiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderFiveService],
    }).compile();

    service = module.get<ProviderFiveService>(ProviderFiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
