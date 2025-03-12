import { Injectable } from '@nestjs/common';
import { Flower } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FlowersCreateDto, TFlowersUpdateDto } from 'src/dtos/flowers.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  create(createFlowerDto: FlowersCreateDto) {
    return this.prisma.flower.create({
      data: createFlowerDto,
    });
  }

  findAll(): Promise<Flower[]> {
    console.log(this.config.get('MODE'));
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
