import { Module } from '@nestjs/common';
import { BaseRepository } from './base.ropository';
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService, BaseRepository],
  exports: [BaseRepository],
})
export class SharedModule {}
