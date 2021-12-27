import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user';
import { UserRepository } from './repository/user.repository';
import { LoggerService } from 'src/sheard/logger.service';
import { SharedModule } from 'src/sheard/sheard.module';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [LoggerService, UserRepository, UserService],
})
export class UserModule {}
