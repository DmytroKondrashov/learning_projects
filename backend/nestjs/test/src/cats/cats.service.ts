import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ModuleRef } from '@nestjs/core';
// import { ConfigService } from '../config/config.service';
import { LazyService } from '../lazy/lazy.service';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat as CatEntity } from './entites/cat.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat as CatMongo } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  // private configService: ConfigService;
  private lazyService: LazyService;

  constructor(
    private moduleRef: ModuleRef,
    private readonly configService: ConfigService,
    @InjectRepository(CatEntity)
    private catRepository: Repository<CatEntity>,
    private readonly dataSource: DataSource,
    @InjectModel(CatMongo.name) private catModel: Model<CatMongo>,
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

  async createMany(cats: Cat[]) {
    const queryRuner = this.dataSource.createQueryRunner();

    await queryRuner.connect();
    await queryRuner.startTransaction();

    try {
      cats.forEach(async (cat) => {
        await queryRuner.manager.save(cat);
      });
      await queryRuner.commitTransaction();
    } catch (error) {
      await queryRuner.rollbackTransaction();
    } finally {
      await queryRuner.release();
    }

    // Alternatively:
    // await this.dataSource.transaction(async (manager) => {
    //   await manager.save(cats);
    // });
  }
}
