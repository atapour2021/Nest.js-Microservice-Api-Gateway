import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from '../sheard/logger.service';
import { SharedModule } from '../sheard/sheard.module';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminSchema } from './model/admin';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: 'admin', schema: AdminSchema }]),
  ],
  controllers: [AdminController],
  providers: [AdminService, LoggerService],
})
export class AdminModule {}
