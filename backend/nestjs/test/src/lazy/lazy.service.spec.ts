import { Test, TestingModule } from '@nestjs/testing';
import { LazyService } from './lazy.service';

describe('LazyService', () => {
  let service: LazyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazyService],
    }).compile();

    service = module.get<LazyService>(LazyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
