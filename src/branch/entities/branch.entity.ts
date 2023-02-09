import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Branch {
  @PrimaryColumn()
  branch_id: string;

  @Column({ length: 50, nullable: true, default: null })
  name: string;

  @Column({ length: 50, nullable: true, default: null })
  client_emp_id: string;

  @Column()
  user_create: string;

  @CreateDateColumn()
  date_create: Date;

  @Column({ nullable: true, default: null })
  user_update: string;

  @UpdateDateColumn()
  date_update: Date;
}
