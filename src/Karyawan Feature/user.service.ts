import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { getConnection, Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { GetFindOneInterface } from './user.controller';
import { Karyawan } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
  ) { }

  // async findAll() {
  //   try {
  //     return await this.karyawanRepository.find();
  //   } catch (e) {
  //     console.log(e);
  //     throw e;
  //   }
  // }

  // async findOne(params: GetFindOneInterface) {
  //   return await this.karyawanRepository.findOne({
  //     where: {
  //       emp_id: params.empid,
  //     }
  //   });
  // }

  // async remove(user) {
  //   await this.karyawanRepository.createQueryBuilder().delete().where({
  //     emp_id: user.empid
  //   }).execute();
  // }

  // async create(params: CreateUserDto) {
  //   const user = new Karyawan();
  //   user.emp_id = params.emp_id;
  //   user.employee_name = params.employee_name;

  //   return await this.karyawanRepository.save(user);
  // }

  // async update(params: CreateUserDto) {
  //   return await this.karyawanRepository.createQueryBuilder()
  //     .update(Karyawan)
  //     .set({
  //       employee_name: params.employee_name
  //     })
  //     .where({
  //       emp_id: params.emp_id
  //     })
  //     .execute();
  // }

  // async ganjilgenap(angka: number) {
  //   let ganjil: string = 'Ganjil: ';
  //   let genap: string = 'Genap: ';

  //   for (let i = 1; i <= angka; i++) {
  //     if (i % 2 == 0) {
  //       genap += `${String(i)},`;
  //     } else {
  //       ganjil += `${String(i)},`;
  //     }
  //   }
  //   return {
  //     ganjil: ganjil,
  //     genap: genap,
  //   };
  // }

  // async isPrime(num: number) {
  //   let prima: string = 'bilangan prima: ';

  //   for (let i = 2; i <= num; i++) {
  //     let prime: boolean = true;
  //     if (num % i === 0) {
  //       prime = false;
  //     }
  //     if (prima) {
  //       prima += `${String(i)},`;
  //     }
  //   }
  //   return { prima: prima }
  // }

  // async isPrime(num: number) {
  //   let prima: string = 'bilangan prima';

  //   for(var i = 2; i < num; i++)
  //     if(num % i === 0) return false;
  //   return num > 1;
  // }

}
