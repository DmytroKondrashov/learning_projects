import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class FlowersCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  price: number;
}

export type TFlowersUpdateDto = Partial<FlowersCreateDto>;
