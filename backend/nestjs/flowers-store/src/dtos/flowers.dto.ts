import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class FlowersCreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the flower',
    example: 'Rose',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The color of the flower',
    example: 'Red',
  })
  color: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The price of the flower',
    example: 10,
  })
  price: number;
}

export type TFlowersUpdateDto = Partial<FlowersCreateDto>;
