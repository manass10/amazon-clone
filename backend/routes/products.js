const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { validatePagination } = require('../middleware/validation');
const { supabase } = require('../config/supabase');
const { optionalAuth } = require('../middleware/auth');
router.get('/products', optionalAuth, async (req, res) => {
    try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const getProducts = async (req, res) => {
    try {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      res.json({ success: true, data });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };

// GET /api/products?productId=...&minPrice=...&maxPrice=...&rating=...&page=...&limit=...
router.get('/', validatePagination, productController.getProducts);

// GET /api/products/:id
router.get('/:id', productController.getProduct);

module.exports = router; 