import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlowersCreateDto, TFlowersUpdateDto } from 'src/dtos/flowers.dto';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFlowerDto: FlowersCreateDto) {
    return this.prisma.flower.create({
      data: createFlowerDto,
    });
  }

  findAll(): Promise<Flower[]> {
    return this.prisma.flower.findMany();
  }

  findOne(id: number) {
    return this.prisma.flower.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFlowerDto: TFlowersUpdateDto) {
    return this.prisma.flower.update({
      where: { id },
      data: updateFlowerDto,
    });
  }

  remove(id: number) {
    return this.prisma.flower.delete({
      where: { id },
    });
  }
}
