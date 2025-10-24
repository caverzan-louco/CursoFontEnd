import { Document } from 'mongoose';
export type StockMovementDocument = StockMovement & Document;
export declare class StockMovement {
    productId: string;
    type: string;
    quantity: number;
    date: Date;
    responsible: string;
}
export declare const StockMovementSchema: import("mongoose").Schema<StockMovement, import("mongoose").Model<StockMovement, any, any, any, Document<unknown, any, StockMovement, any, {}> & StockMovement & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, StockMovement, Document<unknown, {}, import("mongoose").FlatRecord<StockMovement>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<StockMovement> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
