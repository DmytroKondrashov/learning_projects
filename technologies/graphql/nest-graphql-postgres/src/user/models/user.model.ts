import { Field } from '@nestjs/graphql';
import { Post } from 'src/post/models/post.model';

export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field(() => [Post])
  posts: Post[];
}
