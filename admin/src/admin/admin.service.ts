import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/sheard/base.ropository';
import { BaseAdminDto } from './dto/base.admin.dto';

@Injectable()
export class AdminService {
  constructor(private readonly baseRepository: BaseRepository<BaseAdminDto>) {}

  async getAllAdmin(): Promise<BaseAdminDto[]> {
    return await this.baseRepository.FindAll();
  }

  async findAdminById(id: string): Promise<BaseAdminDto> {
    return await this.baseRepository.findById(id);
  }

  async createAdmin(body: BaseAdminDto): Promise<BaseAdminDto> {
    return await this.baseRepository.create(body);
  }

  async updateAdmin(id: string, body: BaseAdminDto): Promise<BaseAdminDto> {
    return await this.baseRepository.update(id, body);
  }

  async deleteAdmin(id: string): Promise<BaseAdminDto> {
    return await this.baseRepository.delete(id);
  }
}
