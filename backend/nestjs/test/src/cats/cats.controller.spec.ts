import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { ConfigModule } from '../config/config.module';
import { CONFIG_OPTIONS } from '../config/constants';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.register({ folder: './config' })],
      controllers: [CatsController],
      providers: [
        CatsService,
        {
          provide: CONFIG_OPTIONS,
          useValue: { folder: './config' },
        },
      ],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
