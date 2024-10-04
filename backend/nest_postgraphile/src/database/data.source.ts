import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest_postgraphile',
  synchronize: false,
  entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
  migrations: ['src/migrations/*{.ts,.js}'],
});

export default dataSource;
