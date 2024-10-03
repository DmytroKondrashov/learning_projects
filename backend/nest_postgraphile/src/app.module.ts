import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgraphileService } from './postgraphile/postgraphile.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_postgraphile',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    PostModule,
    UserModule,
    DatabaseModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders,
    ConfigService,
    PostgraphileService,
  ],
})
export class AppModule {}
