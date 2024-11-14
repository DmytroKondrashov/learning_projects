import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ModuleRef } from '@nestjs/core';
// import { ConfigService } from '../config/config.service';
import { LazyService } from '../lazy/lazy.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatsService {
  // private configService: ConfigService;
  private lazyService: LazyService;

  constructor(
    private moduleRef: ModuleRef,
    private readonly configService: ConfigService,
  ) {}
  async onModuleInit() {
    this.lazyService = await this.moduleRef.create(LazyService);
    // this.configService = await this.moduleRef.resolve(ConfigService);
    console.log(this.configService.get('database.port'));
  }

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.cats;
  }
}
