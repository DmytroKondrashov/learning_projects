import { Module } from '@nestjs/common';
import { FlowersGqlResolver } from './flowers-gql.resolver';
import { FlowersService } from 'src/flowers/flowers.service';

@Module({
  providers: [FlowersGqlResolver, FlowersService],
})
export class FlowersGqlModule {}
