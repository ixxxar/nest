import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateServiceData {
  @ApiProperty({
    description: 'Название услуги',
    example: 'Какое-то модное окрашивание',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Описание услуги',
    example: 'Описание самой крутой услуги по окрашиванию в вашей жизни',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Ссылка на обложку',
    example:
      'https://sun9-3.userapi.com/impg/.../photo_2021-01-01_12-34-56.jpg?size=200x0&quality=90&sign=...&c_uniq_tag=...',
  })
  @IsString()
  avatar: string;
}
