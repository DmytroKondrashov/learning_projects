import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create.cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('create')
  createCat(@Body() body: CreateCatDto) {
    return `This action adds a new cat ${body.name}`;
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
