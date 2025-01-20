import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number): User {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  createUser(
    @Args('name') name: string,
    @Args('age', { type: () => Int }) age: number,
    @Args('email') email: string,
  ): User {
    return this.userService.create({ name, age, email });
  }
}
