import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Staff {
  @PrimaryColumn({ length: 50 })
  staff_id: string;

  @Column({ length: 10 })
  prefix: string;

  @Column({ nullable: true })
  firstname_en: string;

  @Column({ nullable: true })
  lastname_en: string;

  @Column({ nullable: true })
  firstname_th: string;

  @Column({ nullable: true })
  lastname_th: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  positions_id: number;

  @Column({ length: 20, nullable: true })
  sex: string;

  @Column({ nullable: true })
  email: string;

  @Column({ length: 20, nullable: true })
  mobile: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ length: 50, nullable: true })
  staff_status: string;

  @Column()
  role_id: number;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ default: 0 })
  force_change_password: number;

  @Column({ default: 0 })
  blacklist: number;

  @Column({ length: 50 })
  user_create: string;

  @CreateDateColumn()
  date_create: Date;

  @Column({ length: 50, nullable: true })
  user_update: string;

  @UpdateDateColumn()
  date_update: Date;
}