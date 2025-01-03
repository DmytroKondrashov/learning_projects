import { Module } from '@nestjs/common';
import { SecuredController } from './secured.controller';

@Module({
  controllers: [SecuredController]
})
export class SecuredModule {}
