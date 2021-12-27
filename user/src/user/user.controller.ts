import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create.user.dto';
import { EditUserDto } from './dto/edit.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'all' })
  async getAll() {
    return await this.userService.getAllUser();
  }

  @MessagePattern({ cmd: 'find' })
  async findUser(id: string) {
    return await this.userService.findUserById(id);
  }

  @MessagePattern({ cmd: 'create' })
  async create(createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @MessagePattern({ cmd: 'update' })
  async update(updateUserDto: EditUserDto) {
    return await this.userService.updateUser(updateUserDto._id, updateUserDto);
  }

  @MessagePattern({ cmd: 'delete' })
  async delete(id: string) {
    return await this.userService.deleteUser(id);
  }
}
