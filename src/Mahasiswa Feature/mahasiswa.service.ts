import { Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { PrimaryKeyInterface } from "./mahasiswa.controller";
import { Mahasiswa } from "../entities/mahasiswa.entity";
import { Prodi } from "../entities/prodi.entity";
import { mahasiswaDto } from "./create-mahasiswa.dto";

@Injectable()
export class MahasiswaService {
    constructor() { }

    async findAll() {
        return await getConnection().getRepository(Mahasiswa).find();
    }

    async findOne(params: PrimaryKeyInterface) {
        return await getConnection().getRepository(Mahasiswa).findOne({
            where: {
                nim: params.nim,
            }
        });
    }

    async remove(params: PrimaryKeyInterface) {
        return await getConnection()
            .createQueryBuilder()
            .delete()
            .where({
                nim: params.nim
            }).execute();
    }

    async create(params: mahasiswaDto[]) {
        // console.table(params);
        const result: any[] = [];
        for (const data of params) {
            const res = await getConnection()
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
        return await getConnection()
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

    async getMahasiswa(nim: string) {
        return await getConnection()
            .getRepository(Mahasiswa)
            .createQueryBuilder('mahasiswa')
            .leftJoinAndMapOne('mahasiswa.prodi', Prodi, 'prodi', 'mahasiswa.nim = prodi.nim')
            .where('mahasiswa.nim = :mahasiswaNim', { mahasiswaNim: nim })
            .getMany();
    }

}