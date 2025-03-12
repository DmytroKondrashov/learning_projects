import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { ParseIntPipe } from 'src/pipes/pipe';
import { AuthGuard } from 'src/guards/guard';
import { LoggingInterceptor } from 'src/interceptors/interceptor';
import { FlowersCreateDto } from 'src/dtos/flowers.dto';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createFlowerDto: FlowersCreateDto) {
    return this.flowersService.create(createFlowerDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flowersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlowerDto: UpdateFlowerDto) {
    return this.flowersService.update(+id, updateFlowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flowersService.remove(+id);
  }
}
