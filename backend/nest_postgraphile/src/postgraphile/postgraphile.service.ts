import { Injectable, OnModuleInit } from '@nestjs/common';
import { postgraphile } from 'postgraphile';

@Injectable()
export class PostgraphileService implements OnModuleInit {
  public postgraphileMiddleware: any;

  onModuleInit() {
    this.postgraphileMiddleware = postgraphile(
      'postgres://postgres:root@localhost/nest_postgraphile',
      'public',
      {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        dynamicJson: true,
        ignoreRBAC: false,
      },
    );
  }
}
