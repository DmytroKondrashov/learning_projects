import { Resolver } from '@nestjs/graphql';
import { FlowersGqlService } from './flowers-gql.service';

@Resolver()
export class FlowersGqlResolver {
  constructor(private readonly flowersGqlService: FlowersGqlService) {}
}
