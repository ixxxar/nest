import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from 'src/entities/services.entity';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [TypeOrmModule.forFeature([Services])],
})
export class ServicesModule {}
