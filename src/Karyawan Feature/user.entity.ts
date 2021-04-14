import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Karyawan {
  @PrimaryColumn()
  emp_id: string;

  @Column()
  employee_name: string;
}
