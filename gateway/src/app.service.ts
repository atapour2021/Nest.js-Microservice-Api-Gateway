import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_USER') private readonly clientUserApp: ClientProxy,
    @Inject('SERVICE_ADMIN') private readonly clientAdminApp: ClientProxy,
  ) {}

  // user
  allUser() {
    const pattern = { cmd: 'all' };
    const payload = {};
    return this.clientUserApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  findUser(id: string) {
    const pattern = { cmd: 'find' };
    const payload = { _id: id };
    return this.clientUserApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  createUser(body: UserDto) {
    const pattern = { cmd: 'create' };
    const payload = {
      name: body.name,
      family: body.family,
      nationalCode: body.nationalCode,
      age: body.age,
    };
    return this.clientUserApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  deleteUser(id: string) {
    const pattern = { cmd: 'delete' };
    const payload = {
      _id: id,
    };
    return this.clientUserApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  updateUser(id: string, body: UserDto) {
    const pattern = { cmd: 'update' };
    const payload = {
      _id: id,
      name: body.name,
      family: body.family,
      nationalCode: body.nationalCode,
      age: body.age,
    };
    return this.clientUserApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }

  // admin
  allAdmin() {
    const pattern = { cmd: 'all' };
    const payload = {};
    return this.clientAdminApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  findAdmin(id: string) {
    const pattern = { cmd: 'find' };
    const payload = { _id: id };
    return this.clientAdminApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  createAdmin(body: UserDto) {
    const pattern = { cmd: 'create' };
    const payload = {
      name: body.name,
      family: body.family,
      nationalCode: body.nationalCode,
      age: body.age,
    };
    return this.clientAdminApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  deleteAdmin(id: string) {
    const pattern = { cmd: 'delete' };
    const payload = {
      _id: id,
    };
    return this.clientAdminApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
  updateAdmin(id: string, body: UserDto) {
    const pattern = { cmd: 'update' };
    const payload = {
      _id: id,
      name: body.name,
      family: body.family,
      nationalCode: body.nationalCode,
      age: body.age,
    };
    return this.clientAdminApp
      .send<string>(pattern, payload)
      .pipe(map((message: string) => ({ message })));
  }
}
