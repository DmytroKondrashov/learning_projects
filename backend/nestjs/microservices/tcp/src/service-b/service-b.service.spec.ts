import { Test, TestingModule } from '@nestjs/testing';
import { ServiceBService } from './service-b.service';

describe('ServiceBService', () => {
  let service: ServiceBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceBService],
    }).compile();

    service = module.get<ServiceBService>(ServiceBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
