"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const stock_movement_schema_1 = require("./stock-movement.schema");
const product_service_1 = require("../product/product.service");
let StockService = class StockService {
    stockMovementModel;
    productService;
    constructor(stockMovementModel, productService) {
        this.stockMovementModel = stockMovementModel;
        this.productService = productService;
    }
    async getMovements() {
        return this.stockMovementModel.find().exec();
    }
    async addMovement(productId, type, quantity, responsible) {
        const product = await this.productService.findById(productId);
        if (!product)
            throw new Error('Product not found');
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
        const newStock = type === 'entry' ? product.currentStock + quantity : product.currentStock - quantity;
        await this.productService.update(productId, { currentStock: newStock });
        if (newStock <= product.minStock && type === 'exit') {
            return { movement, alert: `Stock below minimum for ${product.name}` };
        }
        return { movement };
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(stock_movement_schema_1.StockMovement.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        product_service_1.ProductService])
], StockService);
//# sourceMappingURL=stock.service.js.map