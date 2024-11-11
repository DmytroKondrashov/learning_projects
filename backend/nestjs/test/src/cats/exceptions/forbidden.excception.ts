import { HttpException, HttpStatus } from '@nestjs/common';

export class Forbiddenexception extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
