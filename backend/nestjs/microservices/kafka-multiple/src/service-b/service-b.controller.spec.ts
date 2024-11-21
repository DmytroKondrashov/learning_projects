import { Test, TestingModule } from '@nestjs/testing';
import { ServiceBController } from './service-b.controller';

describe('ServiceBController', () => {
  let controller: ServiceBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceBController],
    }).compile();

    controller = module.get<ServiceBController>(ServiceBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
