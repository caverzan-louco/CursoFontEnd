# TODO List for Inventory Management System

## 1. Setup Dependencies
- [ ] Update package.json with new dependencies (@nestjs/mongoose, mongoose, @nestjs/jwt, passport, bcrypt, handlebars)
- [ ] Run npm install to install dependencies

## 2. Database Setup
- [ ] Create User schema (for authentication)
- [ ] Create Product schema (with variations like material, size, weight)
- [ ] Create StockMovement schema (for history tracking)
- [ ] Update app.module.ts to configure MongoDB connection

## 3. Authentication Module
- [ ] Create auth module (auth.module.ts)
- [ ] Create auth service (auth.service.ts) with login logic
- [ ] Create auth controller (auth.controller.ts) with login/logout routes
- [ ] Implement JWT strategy and guards
- [ ] Create login view (login.hbs)

## 4. Product Module
- [ ] Create product module (product.module.ts)
- [ ] Create product schema (product.schema.ts)
- [ ] Create product service (product.service.ts) with CRUD operations
- [ ] Create product controller (product.controller.ts) with routes for list, create, update, delete, search
- [ ] Create product management view (product.hbs)

## 5. Stock Module
- [ ] Create stock module (stock.module.ts)
- [ ] Create stock movement schema (stock-movement.schema.ts)
- [ ] Create stock service (stock.service.ts) with entry/exit logic, alerts
- [ ] Create stock controller (stock.controller.ts) with routes for movements
- [ ] Create stock management view (stock.hbs)

## 6. Main Interface
- [ ] Update app.controller.ts for main dashboard
- [ ] Create main view (main.hbs) with user name, logout, links to product and stock

## 7. Views and Templates
- [ ] Configure Handlebars in app.module.ts
- [ ] Implement all views with forms, tables, validations

## 8. Testing
- [ ] Write unit tests for services
- [ ] Write e2e tests for controllers
- [ ] Test authentication, product CRUD, stock movements

## 9. Deliverables
- [ ] Create functional requirements list (requirements.md)
- [ ] Create ER diagram (er-diagram.md or image)
- [ ] Create DB script (db-script.js)
- [ ] Describe test cases (test-description.md)
- [ ] Create infrastructure list (infrastructure.md)

## 10. Final Testing and Deployment
- [ ] Run full application test
- [ ] Ensure all interfaces work as specified
