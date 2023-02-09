import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Double } from 'typeorm';

@Entity()
export class Inout {
  @PrimaryGeneratedColumn()
  inout_id: number;

  @Column({ length: 50, nullable: true, default: null })
  ticket: string;

  @Column({ length: 50, nullable: true, default: null })
  receipt: string;

  @Column()
  location_id: number;

  @Column()
  category_id: number;

  @Column({ length: 50 })
  car_license_plate: string;

  @Column({ length: 50 })
  brand: string;

  @Column()
  access_in: Date;

  @Column({ nullable: true, default: null })
  access_out: Date;

  @Column()
  carpark_type_id: number;

  @Column({ length: 50, nullable: true, default: null })
  device_imei_id: string;

  @Column({ nullable: true, default: null })
  access_in_picture_1: string;

  @Column({ nullable: true, default: null })
  access_in_picture_2: string;

  @Column({ nullable: true, default: null })
  access_out_picture_1: string;

  @Column({ nullable: true, default: null })
  access_out_picture_2: string;

  @Column({ nullable: true, default: null })
  receipt_type_id: number;

  @Column({ type: 'decimal', nullable: true, default: null })
  receipt_total: number;

  @Column({ type: 'decimal', nullable: true, default: null })
  receipt_total_pay: number;

  @Column({ type: 'decimal', nullable: true, default: null })
  receipt_vat: number;

  @Column({ nullable: true, default: null })
  remark: string;

  @Column({ length: 50 })
  user_create: string;

  @CreateDateColumn()
  date_create: Date;

  @Column({ nullable: true, default: null })
  user_update: string;

  @UpdateDateColumn()
  date_update: Date;
}
