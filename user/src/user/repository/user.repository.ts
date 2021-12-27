import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepository } from 'src/sheard/base.ropository';
import { LoggerService } from 'src/sheard/logger.service';
import { BaseUserDto } from '../dto/base.user.dto';

@Injectable()
export class UserRepository extends BaseRepository<BaseUserDto> {
  constructor(
    @InjectModel('User')
    private readonly userModel: mongoose.Model<BaseUserDto>,
    private readonly log: LoggerService,
  ) {
    super(userModel, log);
  }
}
