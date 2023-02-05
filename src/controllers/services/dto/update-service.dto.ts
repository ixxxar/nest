import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateServiceData {
  @ApiProperty({
    description: 'Имя и Фамилия мастера',
    example: 'Дворецков Игорь',
  })
  @IsOptional()
  name: string;

  @ApiProperty({
    description: 'Описание услуги',
    example: 'Описание самой крутой услуги по окрашиванию в вашей жизни',
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'Ссылка на обложку',
    example:
      'https://sun9-3.userapi.com/impg/.../photo_2021-01-01_12-34-56.jpg?size=200x0&quality=90&sign=...&c_uniq_tag=...',
  })
  @IsOptional()
  avatar: string;
}
