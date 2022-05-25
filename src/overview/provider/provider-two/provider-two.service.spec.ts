import { Test, TestingModule } from '@nestjs/testing';
import { ProviderTwoService } from './provider-two.service';

describe('ProviderTwoService', () => {
  let service: ProviderTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderTwoService],
    }).compile();

    service = module.get<ProviderTwoService>(ProviderTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
