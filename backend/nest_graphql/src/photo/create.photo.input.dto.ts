import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreatePhotoInput {
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
