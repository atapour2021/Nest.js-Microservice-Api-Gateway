import { BaseModel } from 'src/sheard/base.model';

export class BaseUserDto extends BaseModel {
  name: string;

  family: string;

  nationalCode: string;

  age: number;
}
