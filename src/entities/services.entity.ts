import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 512 })
  avatar: string;

  @Column()
  description: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;
}
