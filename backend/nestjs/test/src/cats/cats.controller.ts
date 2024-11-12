import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Inject,
  Optional,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create.cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Forbiddenexception } from './exceptions/forbidden.excception';
import { HttpExceptionFilter } from './exceptions/http.exception.filter';
import { ValidationPipe } from './pipes/validation.pipe';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

@Controller('cats')
//  we passed the RolesGuard class (instead of an instance), leaving responsibility for instantiation to the framework and enabling dependency injection.
@UseGuards(RolesGuard)
// we can also pass an in-place instance:
// @UseGuards(new RolesGuard())
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
  @Roles(['admin'])
  createCat(@Body(new ValidationPipe()) body: CreateCatDto) {
    return this.catsService.create(body);
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('redirect')
  @Redirect('/cats', 302)
  redirectToCats() {
    return;
  }

  // The order of handlers MATTERS! if this handler would be last -
  // the localhost:3000/cats/error would be handled by the wildcard handler
  @Get('error')
  @UseFilters(HttpExceptionFilter)
  throwError() {
    // use built-in exception
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    // use custom exception
    throw new Forbiddenexception();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) params: any) {
    return `This action returns a #${params} cat`;
  }

  @Get('*')
  wildcard() {
    return 'This action handles the wildcard route';
  }
}
