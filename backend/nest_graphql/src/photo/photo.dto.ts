import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Photo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  filename: string;

  @Field(() => Int)
  views: number;

  @Field(() => Boolean)
  isPublished: boolean;
}
