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
import { CreateServiceData } from './dto/create-service.dto';
import { ServicesData } from './dto/service-data.dto';
import { UpdateServiceData } from './dto/update-service.dto';
import { ServicesService } from './services.service';

@ApiTags('Модуль услуг')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @ApiOperation({
    summary: 'Получение списка услуг',
  })
  @ApiResponse({
    status: 200,
    type: ServicesData,
  })
  async getMasters(): Promise<ServicesData[]> {
    return await this.servicesService.getMasters();
  }

  @Post()
  @ApiOperation({
    summary: 'Создание услуги',
  })
  @ApiResponse({
    status: 201,
    description: 'Возвращает идентификатор созданной услуги',
    type: Number,
  })
  async createMaster(@Body() body: CreateServiceData): Promise<number> {
    return await this.servicesService.createMaster(body);
  }

  @Patch('/:id')
  @ApiOperation({
    summary: 'Обновление информации об услуге',
  })
  @ApiResponse({
    status: 200,
    type: Boolean,
  })
  async updateMaster(
    @Param('id') id: number,
    @Body() body: UpdateServiceData,
  ): Promise<boolean> {
    return await this.servicesService.updateMaster(id, body);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Удаление услуги',
  })
  @ApiResponse({
    status: 200,
    type: Boolean,
  })
  async removeMaster(@Param('id') id: number): Promise<boolean> {
    return await this.servicesService.removeMaster(id);
  }
}
