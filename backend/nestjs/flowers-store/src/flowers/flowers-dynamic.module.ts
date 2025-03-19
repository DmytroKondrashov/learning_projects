import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class FlowersModule {
  static forRoot(options: any): DynamicModule {
    return {
      module: FlowersModule,
      providers: [{ provide: 'OPTIONS', useValue: options }],
    };
  }
}
