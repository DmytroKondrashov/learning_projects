import { Field } from '@nestjs/graphql';
import { User } from 'src/user/models/user.model';

export class Post {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  userId: number;

  @Field(() => User)
  user: User;
}
