import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMastersDto } from './dto/create-masters.dto';
import { MastersData } from './dto/masters-data.dto';
import { MastersService } from './masters.service';

@ApiTags('Модуль мастеров')
@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Get()
  @ApiOperation({
    summary: 'Получение списка мастеров',
  })
  @ApiResponse({
    status: 200,
    type: MastersData,
  })
  async getMasters(): Promise<MastersData[]> {
    return await this.mastersService.getMasters();
  }

  @Post()
  @ApiOperation({
    summary: 'Создание мастера',
  })
  @ApiResponse({
    status: 201,
    description: 'Возвращает идентификатор созданного мастера',
    type: Number,
  })
  async createMaster(@Body() body: CreateMastersDto): Promise<number> {
    return await this.mastersService.createMaster(body);
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Обновление мастера',
  })
  @ApiResponse({
    status: 200,
    type: Boolean,
  })
  async updateMaster(
    @Param('id') id: number,
    @Body() body: CreateMastersDto,
  ): Promise<boolean> {
    return await this.mastersService.updateMaster(id, body);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Удаление мастера',
  })
  @ApiResponse({
    status: 200,
    type: Boolean,
  })
  async removeMaster(@Param('id') id: number): Promise<boolean> {
    return await this.mastersService.removeMaster(id);
  }
}
