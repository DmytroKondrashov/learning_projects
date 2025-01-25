import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Query } from '@nestjs/graphql';
import { Post } from './models/post.model';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(() => Post)
  async findOne(@Args('id') id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  async createPost(
    @Args('title') title: string,
    @Args('userId') userId: number,
  ): Promise<Post> {
    return this.postService.create(title, userId);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id') id: number,
    @Args('title') title: string,
  ): Promise<Post> {
    return this.postService.update(id, title);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id') id: number): Promise<Post> {
    return this.postService.delete(id);
  }
}
