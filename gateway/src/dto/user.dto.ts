import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  family: string;

  @ApiProperty()
  nationalCode: string;

  @ApiProperty()
  age: number;
}
