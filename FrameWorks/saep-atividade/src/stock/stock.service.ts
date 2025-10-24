import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockMovement, StockMovementDocument } from './stock-movement.schema';
import { ProductService } from '../product/product.service';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(StockMovement.name) private stockMovementModel: Model<StockMovementDocument>,
    private productService: ProductService,
  ) {}

  async getMovements(): Promise<StockMovement[]> {
    return this.stockMovementModel.find().exec();
  }

  async addMovement(productId: string, type: string, quantity: number, responsible: string): Promise<any> {
    const product = await this.productService.findById(productId);
    if (!product) throw new Error('Product not found');

    if (type === 'exit' && product.currentStock < quantity) {
      throw new Error('Insufficient stock');
    }

    const movement = new this.stockMovementModel({
      productId,
      type,
      quantity,
      date: new Date(),
      responsible,
    });

    await movement.save();

    // Update product stock
    const newStock = type === 'entry' ? product.currentStock + quantity : product.currentStock - quantity;
    await this.productService.update(productId, { currentStock: newStock });

    // Check for alert
    if (newStock <= product.minStock && type === 'exit') {
      return { movement, alert: `Stock below minimum for ${product.name}` };
    }

    return { movement };
  }
}
