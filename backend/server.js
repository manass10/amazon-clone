const { supabase } = require('./config/supabase');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const { getProducts } = require('./controllers/productController');
const cartRoutes = require('./routes/cart');
const cartOrders = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get('/api/products', getProducts);
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/auth', require('./routes/auth'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API is running' });
});


// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not found', message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Server error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 