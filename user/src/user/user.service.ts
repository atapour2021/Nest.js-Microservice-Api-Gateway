import { Injectable } from '@nestjs/common';
import { BaseUserDto } from './dto/base.user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getAllUser(): Promise<BaseUserDto[]> {
      return await this.userRepository.FindAll();
    }
  
    async findUserById(id: string): Promise<BaseUserDto> {
      return await this.userRepository.findById(id);
    }
  
    async createUser(body: BaseUserDto): Promise<BaseUserDto> {
      return await this.userRepository.create(body);
    }
  
    async updateUser(id: string, body: BaseUserDto): Promise<BaseUserDto> {
      return await this.userRepository.update(id, body);
    }
  
    async deleteUser(id: string): Promise<BaseUserDto> {
      return await this.userRepository.delete(id);
    }
}
