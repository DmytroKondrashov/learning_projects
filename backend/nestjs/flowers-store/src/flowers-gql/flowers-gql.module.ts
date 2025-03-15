import { Module } from '@nestjs/common';
import { FlowersGqlService } from './flowers-gql.service';
import { FlowersGqlResolver } from './flowers-gql.resolver';

@Module({
  providers: [FlowersGqlResolver, FlowersGqlService],
})
export class FlowersGqlModule {}
