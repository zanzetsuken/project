import { Body, Controller, Delete, Get, Param, Post, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { mahasiswaDto } from "./create-mahasiswa.dto";
import { MahasiswaService } from "./Mahasiswa.service";

@Controller('Mahasiswa')
export class MahasiswaController {
    constructor(private readonly mahasiswaService: MahasiswaService) {}

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const result = await this.mahasiswaService.findAll();
            return res.send({
                message: 'success',
                detail: result,
            });
        } catch (error) {
            return res.send({
                message: error
            });
        }
    }

    @Get('pilih')
    async findOne(@Res() res: Response, @Query() params: PrimaryKeyInterface) {
        try {
            const result = await this.mahasiswaService.findOne(params);
            return res.send({
                message: 'success',
                detail: result,
            });
        } catch (error) {
            return res.send({
                message: error
            });
        }
    }

    @Delete()
    async remove(@Res() res: Response, @Query() params: PrimaryKeyInterface) {
        try {
            const result = await this.mahasiswaService.remove(params);
            return res.send({
                message: 'success',
                detail: result,
            });
        } catch (error) {
            return res.send({
                message: error
            });
        }
    }

    @Post()
    async create(@Res() res: Response, @Body() params: mahasiswaDto[]) {
        try {
            const result = await this.mahasiswaService.create(params);
            return res.send({
                message: 'success',
                detail: result,
            });
        } catch (error) {
            return res.send({
                message: error
            });
        }
    }

    @Post('update')
  async update(@Res() res: Response, @Body() params: mahasiswaDto) {
    try {
      const result = await this.mahasiswaService.update(params);
      return res.send({
        message: 'Success',
        details: result,
      });
    } catch (e) {
      return res.send({
        message: e
      });
    }
  }

}

export interface PrimaryKeyInterface {
    nim: string;
}

