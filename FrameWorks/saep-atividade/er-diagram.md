# Entity-Relationship Diagram for Inventory Management System

## MongoDB Collections (Documents)

### 1. User Collection
```
User {
  _id: ObjectId (auto-generated)
  username: String (unique, required)
  password: String (hashed, required)
  name: String (required)
}
```

### 2. Product Collection
```
Product {
  _id: ObjectId (auto-generated)
  name: String (required)
  description: String
  category: String (required)
  material: String
  size: String
  weight: Number
  minStock: Number (required)
  currentStock: Number (required, default: 0)
}
```

### 3. StockMovement Collection
```
StockMovement {
  _id: ObjectId (auto-generated)
  productId: ObjectId (references Product._id, required)
  type: String (enum: ['entry', 'exit'], required)
  quantity: Number (required)
  date: Date (required)
  responsible: String (required)
}
```

## Relationships

- **User** has no direct relationships (authentication entity)
- **Product** is referenced by **StockMovement** via `productId`
- **StockMovement** belongs to **Product** (many-to-one relationship)

## Key Constraints

- Username must be unique in User collection
- productId in StockMovement must reference existing Product._id
- Type in StockMovement must be either 'entry' or 'exit'
- All required fields must be present for document creation

## Business Rules

- Stock movements update Product.currentStock
- Exit movements check against minStock and trigger alerts
- All movements are logged with timestamp and responsible person
