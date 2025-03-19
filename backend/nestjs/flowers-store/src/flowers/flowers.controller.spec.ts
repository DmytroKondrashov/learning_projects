import { Test } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

// Important! In order for tests to pass you need to comment out the AuthGuard in the Flowers controller

describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
        {
          provide: FlowersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'Rose',
                color: 'Red',
                price: 10,
              },
              {
                id: 2,
                name: 'Lily',
                color: 'White',
                price: 15,
              },
            ]),
            create: jest.fn().mockResolvedValue({
              id: 1,
              name: 'Rose',
              color: 'Red',
              price: 10,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of flowers', async () => {
    expect(await controller.findAll(1)).toEqual([
      {
        id: 1,
        name: 'Rose',
        color: 'Red',
        price: 10,
      },
      {
        id: 2,
        name: 'Lily',
        color: 'White',
        price: 15,
      },
    ]);
  });

  it('should create a flower', async () => {
    expect(
      await controller.create({
        name: 'Rose',
        color: 'Red',
        price: 10,
      }),
    ).toEqual({ id: 1, name: 'Rose', color: 'Red', price: 10 });
  });
});
