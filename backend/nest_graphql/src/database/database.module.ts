import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-graphql',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: ['src/migrations/*{.ts,.js}'],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
