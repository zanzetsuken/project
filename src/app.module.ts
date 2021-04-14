import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './Karyawan Feature/user.controller';
import { UserService } from './Karyawan Feature/user.service';
import { Karyawan } from './Karyawan Feature/user.entity';
import { MahasiswaController } from './Mahasiswa Feature/mahasiswa.controller';
import { MahasiswaService } from './Mahasiswa Feature/Mahasiswa.service';
import { Mahasiswa } from './Mahasiswa Feature/mahasiswa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql12345',
      database: 'mahasiswa',
      autoLoadEntities: true,
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      Karyawan,
      Mahasiswa
    ]),
  ],
  controllers: [
    AppController,
    UserController,
    MahasiswaController
  ],
  providers: [
    AppService,
    UserService,
    MahasiswaService
  ],
})
export class AppModule {}
