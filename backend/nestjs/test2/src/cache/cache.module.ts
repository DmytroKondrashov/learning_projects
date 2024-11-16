import { Module } from '@nestjs/common';
import { CacsheController } from './cache.controller';

@Module({
  controllers: [CacsheController]
})
export class CacsheModule {}
