import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAdminDto } from './dto/create.admin.dto';
import { EditAdminDto } from './dto/edit.admin.dto';
import { AdminService } from './admin.service';

@Controller('Admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @MessagePattern({ cmd: 'all' })
  async getAll() {
    return await this.adminService.getAllAdmin();
  }

  @MessagePattern({ cmd: 'find' })
  async findAdmin(id: string) {
    return await this.adminService.findAdminById(id);
  }

  @MessagePattern({ cmd: 'create' })
  async create(createAdminDto: CreateAdminDto) {
    return await this.adminService.createAdmin(createAdminDto);
  }

  @MessagePattern({ cmd: 'update' })
  async update(updateAdminDto: EditAdminDto) {
    return await this.adminService.updateAdmin(
      updateAdminDto._id,
      updateAdminDto,
    );
  }

  @MessagePattern({ cmd: 'delete' })
  async delete(id: string) {
    return await this.adminService.deleteAdmin(id);
  }
}
