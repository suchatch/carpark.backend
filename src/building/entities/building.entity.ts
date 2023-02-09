import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  building_id: number;

  @Column({ length: 50, nullable: true, default: null })
  name: string;

  @Column({ nullable: true })
  branch_id: string;

  @Column({ nullable: true, default: null })
  picture: string;

  @Column()
  user_create: string;

  @CreateDateColumn()
  date_create: Date;

  @Column({ nullable: true, default: null })
  user_update: string;

  @UpdateDateColumn()
  date_update: Date;
}
