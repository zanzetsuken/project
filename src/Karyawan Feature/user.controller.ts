import { Body, Controller, Delete, Get, Param, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  } 

  @Get('user/:id')
  async findOne(@Param('id') user) {
    const a = await this.userService.findOne(user);
    console.table(a);
    return a;
  }

  @Get('coba')
  async afindOne(@Query() params: GetFindOneInterface) {
    return await this.userService.findOne(params);
  }

  @Delete('coba')
  remove(@Query() user) {
    return this.userService.remove(user);
  }

  @Post()
  async create(@Body() params: CreateUserDto) {
    return await this.userService.create(params);
  }
  
  @Post('update')
  async update(@Res() res: Response, @Body() params: CreateUserDto) {
    try {
      const result = await this.userService.update(params);
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

  @Post('ganjilgenap')
  async ganjilgenap(@Res() res: Response, @Body() params) {
    try {
      const result = await this.userService.ganjilgenap(params.angka);
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

  @Post('isprime')
  async isprime(@Res() res: Response, @Body() params) {
    try {
      const result = await this.userService.isPrime(params.num);
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

export interface GetFindOneInterface{
  empid: string;
}
