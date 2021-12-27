/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  family: string;

  @Prop({ required: true })
  nationalCode: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);