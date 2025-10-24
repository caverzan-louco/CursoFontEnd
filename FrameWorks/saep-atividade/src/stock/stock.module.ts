import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { StockMovement, StockMovementSchema } from './stock-movement.schema';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: StockMovement.name, schema: StockMovementSchema }]),
    ProductModule,
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
