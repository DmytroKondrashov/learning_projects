import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Photo } from './photo.dto';
import { CreatePhotoInput } from './create.photo.input.dto';
import { PhotoService } from './photo.service';

@Resolver()
export class PhotoResolver {
  constructor(private readonly photoService: PhotoService) {}

  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => [Photo])
  getPhotos(): Promise<Photo[]> {
    return this.photoService.getPhotos();
  }

  @Mutation(() => Photo)
  createPhoto(@Args('input') input: CreatePhotoInput) {
    return this.photoService.createPhoto(input);
  }

  @Mutation(() => Photo)
  updateViews(@Args('input') input: CreatePhotoInput) {
    return this.photoService.createPhoto(input);
  }

  @Mutation(() => Photo)
  addView(@Args('id') id: number) {
    return this.photoService.addView(id);
  }

  @Mutation(() => String)
  deletePhoto(@Args('id') id: number) {
    return this.photoService.deletePhoto(id);
  }
}
