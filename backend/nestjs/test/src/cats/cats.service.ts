import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ModuleRef } from '@nestjs/core';
import { ConfigService } from '../config/config.service';
import { LazyService } from '../lazy/lazy.service';

@Injectable()
export class CatsService {
  private configService: ConfigService;
  private lazyService: LazyService;

  constructor(private moduleRef: ModuleRef) {}
  async onModuleInit() {
    this.lazyService = await this.moduleRef.create(LazyService);
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
