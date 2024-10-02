import { Injectable } from '@nestjs/common';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePhotoInput } from './create.photo.input.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  createPhoto(input: CreatePhotoInput): Promise<Photo> {
    const newPhoto = this.photoRepository.create(input);
    return this.photoRepository.save(newPhoto);
  }

  getPhotos(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async addView(id): Promise<Photo> {
    const photo = await this.photoRepository.findOneBy({ id });

    if (photo) {
      photo.views += 1;
    }

    return this.photoRepository.save(photo);
  }

  async deletePhoto(id) {
    await this.photoRepository.delete({ id });
    return 'Photo deleted!';
  }
}
