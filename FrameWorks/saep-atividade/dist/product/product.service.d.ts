import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    search(query: string): Promise<Product[]>;
    create(product: Partial<Product>): Promise<Product>;
    update(id: string, product: Partial<Product>): Promise<Product>;
    delete(id: string): Promise<any>;
}
