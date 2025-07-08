const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const ordersController = require('../controllers/ordersController');

// POST /api/orders/checkout (create order from cart)
router.post('/checkout', authenticateToken, ordersController.createOrderFromCart);

// GET /api/orders/:user_id (get order history)
router.get('/:user_id', authenticateToken, ordersController.getOrderHistory);

module.exports = router; 