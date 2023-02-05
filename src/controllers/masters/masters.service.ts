import getCurrentTimestamp from 'src/utils/getCurrentTimestamp.utils';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Masters } from 'src/entities/masters.entity';
import { Repository } from 'typeorm';
import { CreateMastersDto } from './dto/create-masters.dto';
import { MastersData } from './dto/masters-data.dto';

@Injectable()
export class MastersService {
  constructor(
    @InjectRepository(Masters)
    private readonly mastersRepository: Repository<Masters>,
  ) {}
  async getMasters(): Promise<MastersData[]> {
    return this.mastersRepository.find();
  }
  async createMaster(body: CreateMastersDto): Promise<number> {
    if (Object.keys(body)) {
      const res = await this.mastersRepository
        .createQueryBuilder()
        .insert()
        .into(Masters)
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
    await this.mastersRepository
      .createQueryBuilder()
      .delete()
      .from(Masters)
      .where('id = :id', { id })
      .execute();
    return true;
  }

  async updateMaster(id: number, body: CreateMastersDto): Promise<boolean> {
    await this.mastersRepository
      .createQueryBuilder()
      .update(Masters)
      .set({ ...body, updated_at: getCurrentTimestamp() })
      .where('id = :id', { id })
      .execute();
    return true;
  }
}
