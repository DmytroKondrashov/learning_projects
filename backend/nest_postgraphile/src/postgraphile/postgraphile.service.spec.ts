import { Test, TestingModule } from '@nestjs/testing';
import { PostgraphileService } from './postgraphile.service';

describe('PostgraphileService', () => {
  let service: PostgraphileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgraphileService],
    }).compile();

    service = module.get<PostgraphileService>(PostgraphileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
