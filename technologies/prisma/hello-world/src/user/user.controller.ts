import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Post()
  async create(@Body() data: { name: string; email: string }) {
    return this.userService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; email?: string },
  ) {
    return this.userService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
