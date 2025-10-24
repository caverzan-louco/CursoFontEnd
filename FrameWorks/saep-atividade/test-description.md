# Software Testing Description for Inventory Management System

## Testing Tools and Environment

### Tools
- **Unit Testing**: Jest (already configured in package.json)
- **E2E Testing**: Supertest with Jest
- **Database Testing**: MongoDB Memory Server (for isolated tests)
- **Coverage**: Jest coverage reports

### Environment
- **Development**: Node.js with TypeScript
- **Database**: MongoDB (local instance for testing)
- **Browser**: Chrome/Firefox for manual UI testing

## Test Cases by Functional Requirement

### Authentication Tests (RF1)
- **TC1.1**: Successful login with valid credentials
  - Input: Valid username/password
  - Expected: JWT token returned, redirect to main page
- **TC1.2**: Failed login with invalid credentials
  - Input: Invalid username/password
  - Expected: Error message displayed, stay on login page
- **TC1.3**: Access protected route without token
  - Input: Request to /products without auth
  - Expected: 401 Unauthorized response

### Main Interface Tests (RF2)
- **TC2.1**: Display user name on main page
  - Input: Authenticated user
  - Expected: User name displayed in header
- **TC2.2**: Logout functionality
  - Input: Click logout button
  - Expected: Redirect to login page, token cleared
- **TC2.3**: Navigation to product management
  - Input: Click product management button
  - Expected: Redirect to /products
- **TC2.4**: Navigation to stock management
  - Input: Click stock management button
  - Expected: Redirect to /stock

### Product Management Tests (RF3)
- **TC3.1**: List all products
  - Input: GET /products
  - Expected: Return array of products, display in table
- **TC3.2**: Search products
  - Input: GET /products?search=hammer
  - Expected: Return filtered products matching search term
- **TC3.3**: Create new product
  - Input: POST /products with valid data
  - Expected: Product created, 201 response
- **TC3.4**: Create product with invalid data
  - Input: POST /products with missing required fields
  - Expected: 400 Bad Request with validation errors
- **TC3.5**: Update existing product
  - Input: PUT /products/:id with valid data
  - Expected: Product updated, 200 response
- **TC3.6**: Delete product
  - Input: DELETE /products/:id
  - Expected: Product removed, 200 response

### Stock Management Tests (RF4)
- **TC4.1**: List products alphabetically
  - Input: GET /stock
  - Expected: Products sorted by name
- **TC4.2**: Add stock entry
  - Input: POST /stock/movement with entry data
  - Expected: Stock increased, movement recorded
- **TC4.3**: Add stock exit
  - Input: POST /stock/movement with exit data
  - Expected: Stock decreased, movement recorded
- **TC4.4**: Exit with insufficient stock
  - Input: POST /stock/movement exit > current stock
  - Expected: Error response, no stock change
- **TC4.5**: Alert on low stock
  - Input: Exit that brings stock below minimum
  - Expected: Alert message returned
- **TC4.6**: Record movement with date and responsible
  - Input: POST /stock/movement with complete data
  - Expected: Movement saved with all fields

### Data Persistence Tests (RF5)
- **TC5.1**: Data stored in MongoDB
  - Input: Create/update operations
  - Expected: Data persisted in database
- **TC5.2**: Movement history maintained
  - Input: Multiple movements on same product
  - Expected: All movements retrievable
- **TC5.3**: Referential integrity
  - Input: Movement with invalid productId
  - Expected: Error or validation failure

### User Interface Tests (RF6)
- **TC6.1**: Login page renders correctly
  - Input: Navigate to /auth/login
  - Expected: Form with username/password fields
- **TC6.2**: Product table displays data
  - Input: Navigate to /products
  - Expected: Table with product information
- **TC6.3**: Stock management form works
  - Input: Fill and submit stock movement form
  - Expected: Movement added, page updates
- **TC6.4**: Navigation between pages
  - Input: Click navigation buttons
  - Expected: Correct page loads

## Test Execution Strategy

1. **Unit Tests**: Run with `npm run test`
2. **E2E Tests**: Run with `npm run test:e2e`
3. **Integration Tests**: Test with real MongoDB instance
4. **Manual UI Tests**: Browser testing for interface functionality
5. **Performance Tests**: Load testing for concurrent users

## Coverage Goals
- Unit tests: 80%+ code coverage
- E2E tests: Cover all critical user flows
- Manual tests: Verify UI/UX requirements
