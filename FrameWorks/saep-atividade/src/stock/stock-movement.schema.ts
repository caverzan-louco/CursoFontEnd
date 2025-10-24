import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockMovementDocument = StockMovement & Document;

@Schema()
export class StockMovement {
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true, enum: ['entry', 'exit'] })
  type: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  responsible: string;
}

export const StockMovementSchema = SchemaFactory.createForClass(StockMovement);
