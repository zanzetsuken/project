import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaController } from './Mahasiswa Feature/mahasiswa.controller';
import { MahasiswaService } from './Mahasiswa Feature/Mahasiswa.service';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/entities/**/*.entity{.ts,.js}`],
      synchronize: false,
    }),
  ],
  controllers: [
    AppController,
    MahasiswaController
  ],
  providers: [
    AppService,
    MahasiswaService
  ],
})
export class AppModule { }
