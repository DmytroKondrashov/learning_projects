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
import { ParseIntPipe } from '../pipes/pipe';
import { AuthGuard } from '../guards/guard';
import { LoggingInterceptor } from '../interceptors/interceptor';
import { FlowersCreateDto } from '../dtos/flowers.dto';
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Create a new flower' })
  @ApiBody({ type: FlowersCreateDto })
  @ApiResponse({ status: 201 })
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
