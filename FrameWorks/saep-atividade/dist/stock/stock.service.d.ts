import { Model } from 'mongoose';
import { StockMovement, StockMovementDocument } from './stock-movement.schema';
import { ProductService } from '../product/product.service';
export declare class StockService {
    private stockMovementModel;
    private productService;
    constructor(stockMovementModel: Model<StockMovementDocument>, productService: ProductService);
    getMovements(): Promise<StockMovement[]>;
    addMovement(productId: string, type: string, quantity: number, responsible: string): Promise<any>;
}
