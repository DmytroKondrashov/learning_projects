import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async create(data: { name: string; email: string }) {
    return this.prisma.user.create({ data });
  }

  async update(id: number, data: { name?: string; email?: string }) {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
