import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('masters')
export class Masters {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column({ length: 512 })
  avatar: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;
}
