import { Query, Resolver } from '@nestjs/graphql';
import { FlowersService } from 'src/flowers/flowers.service';

@Resolver()
export class FlowersGqlResolver {
  constructor(private readonly flowersService: FlowersService) {}

  @Query(() => String, { name: 'flowers' })
  findAll() {
    return this.flowersService.findAll();
  }
}
