import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_USER',
        transport: Transport.TCP,
        options: {
          host: '172.16.10.77',
          port: 3000,
        },
      },
      {
        name: 'SERVICE_ADMIN',
        transport: Transport.TCP,
        options: {
          host: '172.16.10.77',
          port: 4000,
        },
      },
    ]),
  ],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
