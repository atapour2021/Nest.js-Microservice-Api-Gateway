import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from './sheard/logger.service';
import { SharedModule } from './sheard/sheard.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:27017/user', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    SharedModule,
  ],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
