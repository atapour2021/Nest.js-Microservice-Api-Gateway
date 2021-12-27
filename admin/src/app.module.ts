import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { LoggerService } from './sheard/logger.service';
import { SharedModule } from './sheard/sheard.module';

@Module({
  imports: [
    AdminModule,
    MongooseModule.forRoot('mongodb://localhost:27017/admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    SharedModule,
  ],
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
