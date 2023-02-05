import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Masters } from 'src/entities/masters.entity';
import { MastersController } from './masters.controller';
import { MastersService } from './masters.service';

@Module({
  controllers: [MastersController],
  providers: [MastersService],
  imports: [TypeOrmModule.forFeature([Masters])],
})
export class MastersModule {}
