import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'mahasiswa' })
export class Mahasiswa extends BaseEntity {
    @PrimaryColumn({ name: 'nim' })
    nim: string;

    @Column({ name: 'nama' })
    nama: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'kelahiran' })
    kelahiran: string;

    @Column({ name: 'ALAMAT' })
    ALAMAT: string;
}