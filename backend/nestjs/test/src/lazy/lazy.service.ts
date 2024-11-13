import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class LazyService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    console.log('Lazy module has been initialized.');
  }

  onModuleDestroy() {
    console.log('Lazy module has been destroyed.');
  }
}
