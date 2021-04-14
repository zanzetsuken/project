import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Mahasiswa{
    @PrimaryColumn()
    nim: string;

    @Column()
    nama: string;

    @Column()
    email: string;


    @Column()
    kelahiran: string;

    @Column()
    ALAMAT: string;
}