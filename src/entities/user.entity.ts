import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'karyawan' })
export class Karyawan {
  @PrimaryColumn({ name: 'emp_id' })
  empId: string;

  @Column({ name: 'employee_name' })
  employeeName: string;
}
