import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AdminDto } from './dto/Admin.dto';

@ApiTags('Admin')
@Controller('Admin')
export class AdminController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async allPayment() {
    return await this.appService.allAdmin();
  }

  @Get(':id')
  findOrder(@Param('id') id: string) {
    return this.appService.findAdmin(id);
  }

  @Post()
  async createOrder(@Body() body: AdminDto) {
    return await this.appService.createAdmin(body);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return await this.appService.deleteAdmin(id);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() body: AdminDto) {
    return await this.appService.updateAdmin(id, body);
  }
}
