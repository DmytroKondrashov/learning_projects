import { Injectable } from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFlowerDto: CreateFlowerDto) {
    return 'This action adds a new flower';
  }

  findAll(): Flower {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 100,
      },
      {
        name: 'Lily',
        color: 'White',
        price: 50,
      },
      {
        name: 'Daisy',
        color: 'White',
        price: 20,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} flower`;
  }

  update(id: number, updateFlowerDto: UpdateFlowerDto) {
    return `This action updates a #${id} flower`;
  }

  remove(id: number) {
    return `This action removes a #${id} flower`;
  }
}
