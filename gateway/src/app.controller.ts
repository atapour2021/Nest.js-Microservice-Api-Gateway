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
import { UserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('Users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async allPayment() {
    return await this.appService.allUser();
  }

  @Get(':id')
  findOrder(@Param('id') id: string) {
    return this.appService.findUser(id);
  }

  @Post()
  async createOrder(@Body() body: UserDto) {
    return await this.appService.createUser(body);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return await this.appService.deleteUser(id);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() body: UserDto) {
    return await this.appService.updateUser(id, body);
  }
}
