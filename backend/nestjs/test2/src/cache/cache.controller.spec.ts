import { Test, TestingModule } from '@nestjs/testing';
import { CacsheController } from './cache.controller';

describe('CacsheController', () => {
  let controller: CacsheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CacsheController],
    }).compile();

    controller = module.get<CacsheController>(CacsheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
