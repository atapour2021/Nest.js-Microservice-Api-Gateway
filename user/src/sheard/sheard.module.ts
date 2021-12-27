import { Module } from '@nestjs/common';
import { BaseRepository } from './base.ropository';
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService, BaseRepository],
})
export class SharedModule {}
