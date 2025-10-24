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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockMovementSchema = exports.StockMovement = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let StockMovement = class StockMovement {
    productId;
    type;
    quantity;
    date;
    responsible;
};
exports.StockMovement = StockMovement;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StockMovement.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['entry', 'exit'] }),
    __metadata("design:type", String)
], StockMovement.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], StockMovement.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], StockMovement.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], StockMovement.prototype, "responsible", void 0);
exports.StockMovement = StockMovement = __decorate([
    (0, mongoose_1.Schema)()
], StockMovement);
exports.StockMovementSchema = mongoose_1.SchemaFactory.createForClass(StockMovement);
//# sourceMappingURL=stock-movement.schema.js.map