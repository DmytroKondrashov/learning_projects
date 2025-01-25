import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async create(title: string, userId: number) {
    return this.prisma.post.create({ data: { title, userId } });
  }

  async update(id: number, title: string) {
    return this.prisma.post.update({ where: { id }, data: { title } });
  }

  async delete(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
