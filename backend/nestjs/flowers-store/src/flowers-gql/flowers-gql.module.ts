import { Module } from '@nestjs/common';
import { FlowersGqlResolver } from './flowers-gql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FlowersGqlResolver, FlowersService, PrismaService],
})
export class FlowersGqlModule {}
