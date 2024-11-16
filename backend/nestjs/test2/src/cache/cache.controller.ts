import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('cacshe')
export class CacsheController {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  @Post('set')
  async set(@Body() body: { key: string; value: string }) {
    await this.cacheManager.set(body.key, body.value);
    return { message: 'Value set in cache' };
  }
}
