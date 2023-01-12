/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop()
  name: string;

  @Prop()
  icon: string;

  @Prop()
  val: string;

  @Prop([String])
  subMenu: string[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
