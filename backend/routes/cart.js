const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const cartController = require('../controllers/cartController');
const { supabase } = require('../config/supabase');

// POST /api/cart (add product to cart)
router.post('/', authenticateToken, cartController.addToCart);

// GET /api/cart (get user's cart)
router.get('/', authenticateToken, cartController.getCart);

module.exports = router; 