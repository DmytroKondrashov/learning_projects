import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ModuleRef } from '@nestjs/core';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class CatsService {
  private configService: ConfigService;
  constructor(private moduleRef: ModuleRef) {}
  async onModuleInit() {
    this.configService = await this.moduleRef.resolve(ConfigService);
  }

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
