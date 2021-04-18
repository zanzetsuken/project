import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'prodi' })
export class Prodi extends BaseEntity {
    @PrimaryColumn({ name: 'nim' })
    nim: string;

    @Column({ name: 'mataKuliah' })
    mataKuliah: string;

    @Column({ name: 'nilai' })
    nilai: number;

    @Column({ name: 'dosen' })
    dosen: string;

}