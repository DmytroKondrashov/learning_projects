import { Test, TestingModule } from '@nestjs/testing';
import { SecuredController } from './secured.controller';

describe('SecuredController', () => {
  let controller: SecuredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecuredController],
    }).compile();

    controller = module.get<SecuredController>(SecuredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
