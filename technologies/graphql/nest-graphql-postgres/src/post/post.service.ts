import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({ include: { user: true } });
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
