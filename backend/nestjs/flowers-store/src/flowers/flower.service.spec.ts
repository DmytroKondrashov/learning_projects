import { Test } from '@nestjs/testing';
import { FlowersService } from './flowers.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
describe('FlowerService', () => {
  let service: FlowersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FlowersService,
        ConfigService,
        {
          provide: PrismaService,
          useValue: {
            flower: {
              findMany: jest.fn().mockResolvedValue([
                {
                  id: 1,
                  name: 'Rose',
                  color: 'Red',
                  price: 10,
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
        },
      ],
    }).compile();

    service = module.get<FlowersService>(FlowersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of flowers', async () => {
    expect(await service.findAll()).toEqual([
      {
        id: 1,
        name: 'Rose',
        color: 'Red',
        price: 10,
      },
    ]);
  });

  it('should create a flower', async () => {
    expect(
      await service.create({
        name: 'Rose',
        color: 'Red',
        price: 10,
      }),
    ).toEqual({ id: 1, name: 'Rose', color: 'Red', price: 10 });
  });
});
