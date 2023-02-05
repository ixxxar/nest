import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateMasterData {
  @ApiProperty({
    description: 'Имя и Фамилия мастера',
    example: 'Дворецков Игорь',
  })
  @IsOptional()
  name: string;
  avatar: string;
}
