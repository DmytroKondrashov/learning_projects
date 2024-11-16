import { Module } from '@nestjs/common';
import { CacsheController } from './cacshe.controller';

@Module({
  controllers: [CacsheController]
})
export class CacsheModule {}
