import { StockService } from './stock.service';
import { ProductService } from '../product/product.service';
export declare class StockController {
    private readonly stockService;
    private readonly productService;
    constructor(stockService: StockService, productService: ProductService);
    findAll(): Promise<{
        products: import("../product/product.schema").Product[];
        movements: import("./stock-movement.schema").StockMovement[];
    }>;
    addMovement(body: {
        productId: string;
        type: string;
        quantity: number;
        responsible: string;
    }): Promise<any>;
}
