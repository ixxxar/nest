import getCurrentTimestamp from 'src/utils/getCurrentTimestamp.utils';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceData } from './dto/create-service.dto';
import { ServicesData } from './dto/service-data.dto';
import { Services } from 'src/entities/services.entity';
import { UpdateServiceData } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private readonly servicesRepository: Repository<Services>,
  ) {}
  async getMasters(): Promise<ServicesData[]> {
    return this.servicesRepository.find();
  }
  async createMaster(body: CreateServiceData): Promise<number> {
    if (Object.keys(body)) {
      const res = await this.servicesRepository
        .createQueryBuilder()
        .insert()
        .into(Services)
        .values({
          ...body,
          created_at: getCurrentTimestamp(),
          updated_at: getCurrentTimestamp(),
        })
        .execute();
      return res.identifiers[0].id;
    }
  }

  async removeMaster(id: number): Promise<boolean> {
    await this.servicesRepository
      .createQueryBuilder()
      .delete()
      .from(Services)
      .where('id = :id', { id })
      .execute();
    return true;
  }

  async updateMaster(id: number, body: UpdateServiceData): Promise<boolean> {
    await this.servicesRepository
      .createQueryBuilder()
      .update(Services)
      .set({ ...body, updated_at: getCurrentTimestamp() })
      .where('id = :id', { id })
      .execute();
    return true;
  }
}
