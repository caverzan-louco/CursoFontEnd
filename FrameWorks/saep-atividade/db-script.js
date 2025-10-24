// MongoDB script to create database and populate with sample data

// Connect to MongoDB
db = db.getSiblingDB('inventory');

// Create collections
db.createCollection('users');
db.createCollection('products');
db.createCollection('stockmovements');

// Insert sample user (password is 'password' hashed with bcrypt)
db.users.insertOne({
  username: 'admin',
  password: '$2b$10$example.hash.here', // Replace with actual bcrypt hash for 'password'
  name: 'Administrator'
});

// Insert sample products
db.products.insertMany([
  {
    name: 'Hammer',
    description: 'Steel hammer with wooden handle',
    category: 'Tools',
    material: 'Steel',
    size: 'Medium',
    weight: 1.5,
    minStock: 10,
    currentStock: 25
  },
  {
    name: 'Screwdriver',
    description: 'Insulated screwdriver set',
    category: 'Tools',
    material: 'Plastic',
    size: 'Various',
    weight: 0.3,
    minStock: 20,
    currentStock: 15
  },
  {
    name: 'Wrench',
    description: 'Adjustable wrench',
    category: 'Tools',
    material: 'Steel',
    size: '12 inch',
    weight: 0.8,
    minStock: 5,
    currentStock: 8
  }
]);

// Insert sample stock movements
db.stockmovements.insertMany([
  {
    productId: ObjectId(), // Replace with actual product ObjectId
    type: 'entry',
    quantity: 50,
    date: new Date('2023-01-01'),
    responsible: 'Admin'
  },
  {
    productId: ObjectId(), // Replace with actual product ObjectId
    type: 'exit',
    quantity: 25,
    date: new Date('2023-01-15'),
    responsible: 'User1'
  }
]);

print('Database populated successfully');
