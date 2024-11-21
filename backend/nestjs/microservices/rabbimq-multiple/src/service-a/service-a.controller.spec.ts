import { Test, TestingModule } from '@nestjs/testing';
import { ServiceAController } from './service-a.controller';

describe('ServiceAController', () => {
  let controller: ServiceAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceAController],
    }).compile();

    controller = module.get<ServiceAController>(ServiceAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
