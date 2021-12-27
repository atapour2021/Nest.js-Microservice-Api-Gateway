import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  family: string;

  @Prop({ required: true })
  nationalCode: string;

  @Prop()
  age: number;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
