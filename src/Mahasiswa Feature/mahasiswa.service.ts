import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { mahasiswaDto } from "./create-mahasiswa.dto";
import { PrimaryKeyInterface } from "./mahasiswa.controller";
import { Mahasiswa } from "./mahasiswa.entity";

@Injectable()
export class MahasiswaService {
    constructor(
        @InjectRepository(Mahasiswa)
        private readonly mahasiswaRepository: Repository<Mahasiswa>,
    ) { }

    async findAll() {
        return await this.mahasiswaRepository.find();
    }

    async findOne(params: PrimaryKeyInterface) {
        return await this.mahasiswaRepository.findOne({
            where: {
                nim: params.nim,
            }
        });
    }

    async remove(params: PrimaryKeyInterface) {
        return await this.mahasiswaRepository.
            createQueryBuilder()
            .delete()
            .where({
                nim: params.nim
            }).execute();
    }

    async create(params: mahasiswaDto[]) {
        // console.table(params);
        const result: any[] = []; 
        for (const data of params) {
            const res = await this.mahasiswaRepository
                .createQueryBuilder()
                .insert()
                .into(Mahasiswa)
                .values([
                    {
                        nim: data.nim,
                        nama: data.nama,
                        email: data.email,
                        kelahiran: data.kelahiran,
                        ALAMAT: data.ALAMAT
                    },
                ])
                .execute();
                result.push(res);
        }
        return result;
    }

    async update(params: mahasiswaDto) {
        return await this.mahasiswaRepository
        .createQueryBuilder()
        .update(Mahasiswa)
        .set({
            nama: params.nama,
            email: params.email,
            kelahiran: params.kelahiran,
            ALAMAT: params.ALAMAT
        })
        .where({
            nim: params.nim
        })
        .execute();
    }

    // async update(params: mahasiswaDto) {
    //     return await this.mahasiswaRepository
    //     .createQueryBuilder()
    //     .update(Mahasiswa)
    //     .set({
    //         nim: params.nim,
    //     })
    //     .where({
    //         nama: params.nim
    //     })
    //     .execute();
    // }

}