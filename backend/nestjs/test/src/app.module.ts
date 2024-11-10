import { Global, Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

// When you want to provide a set of providers which should be available everywhere out-of-the-box - use @Global()
@Global()
@Module({
  imports: [CatsModule],
  // We can inject dependencies directly into the app module
  // controllers: [AppController, CatsController],
  // providers: [AppService, CatsService],
})
export class AppModule {}

// A module class can inject providers as well (e.g., for configuration purposes):
// export class CatsModule {
//   constructor(private catsService: CatsService) {}
// }
