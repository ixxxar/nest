import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class MastersData {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Имя и фамилия мастера',
    example: 'Игорь Дворецков',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Ссылка на аватар пользователя',
    example:
      'https://sun9-3.userapi.com/impg/.../photo_2021-01-01_12-34-56.jpg?size=200x0&quality=90&sign=...&c_uniq_tag=...',
  })
  @IsString()
  avatar: string;
}
