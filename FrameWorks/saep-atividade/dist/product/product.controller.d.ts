import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(search?: string): Promise<{
        products: any;
    }>;
    create(product: any): Promise<import("./product.schema").Product>;
    update(id: string, product: any): Promise<import("./product.schema").Product>;
    delete(id: string): Promise<any>;
}
