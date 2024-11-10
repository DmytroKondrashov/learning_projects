import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Inject,
  Optional,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create.cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    // Optional dependency injection (will not throw an error if the dependency is not provided)
    @Optional() @Inject('HTTP_OPTIONS') private httpOptions: any,
  ) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post('create')
  createCat(@Body() body: CreateCatDto) {
    return this.catsService.create(body);
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('*')
  wildcard() {
    return 'This action handles the wildcard route';
  }

  @Get('redirect')
  @Redirect('/cats', 302)
  redirectToCats() {
    return;
  }

  @Get(':id')
  findOne(@Param() params: any) {
    return `This action returns a #${params.id} cat`;
  }
}
