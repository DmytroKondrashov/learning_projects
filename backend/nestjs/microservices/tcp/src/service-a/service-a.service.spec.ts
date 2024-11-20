import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAService } from './service-a.service';

describe('ServiceAService', () => {
  let service: ServiceAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceAService],
    }).compile();

    service = module.get<ServiceAService>(ServiceAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
