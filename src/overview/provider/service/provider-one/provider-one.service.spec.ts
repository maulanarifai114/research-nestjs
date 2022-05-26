import { Test, TestingModule } from '@nestjs/testing';
import { ProviderOneService } from './provider-one.service';

describe('ProviderOneService', () => {
  let service: ProviderOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderOneService],
    }).compile();

    service = module.get<ProviderOneService>(ProviderOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
