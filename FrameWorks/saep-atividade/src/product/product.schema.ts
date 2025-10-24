import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  material: string;

  @Prop()
  size: string;

  @Prop()
  weight: number;

  @Prop({ required: true })
  minStock: number;

  @Prop({ required: true, default: 0 })
  currentStock: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
