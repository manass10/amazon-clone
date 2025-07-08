const { supabase } = require('../config/supabase');
/**
 * Get all products with pagination and filtering
 */
const getProducts = async (req, res) => {
  try {
    const { productId, minPrice, maxPrice, rating, page = 1, limit = 20 } = req.query;
    let query = supabase.from('products').select('*', { count: 'exact' });

    if (productId) query = query.eq('product_id', productId);
    if (minPrice) query = query.gte('price', Number(minPrice));
    if (maxPrice) query = query.lte('price', Number(maxPrice));
    if (rating) query = query.gte('rating', Number(rating));

    const from = (page - 1) * limit;
    const to = from + Number(limit) - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;
    if (error) throw error;

    res.json({
      success: true,
      data,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        totalPages: Math.ceil(count / limit)
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * Get single product by ID
 */
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    if (error || !data) return res.status(404).json({ success: false, error: 'Product not found' });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/**
 * Create new product (Admin only)
 */
const createProduct = async (req, res) => {
  try {
    const { 
      name, 
      description, 
      price, 
      categoryId, 
      stock, 
      images, 
      specifications 
    } = req.body;

    const { data: product, error } = await supabase
      .from('products')
      .insert([
        {
          name,
          description,
          price: parseFloat(price),
          category_id: categoryId,
          stock: parseInt(stock),
          images: images || [],
          specifications: specifications || {},
          seller_id: req.user.id
        }
      ])
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        error: 'Failed to create product',
        message: error.message
      });
    }

    res.status(201).json({
      message: 'Product created successfully',
      product
    });

  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({
      error: 'Failed to create product',
      message: 'Internal server error'
    });
  }
};

/**
 * Update product (Admin/Seller only)
 */
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check if user can update this product
    const { data: existingProduct } = await supabase
      .from('products')
      .select('seller_id')
      .eq('id', id)
      .single();

    if (!existingProduct) {
      return res.status(404).json({
        error: 'Product not found',
        message: 'The requested product does not exist'
      });
    }

    if (req.user.role !== 'admin' && existingProduct.seller_id !== req.user.id) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You can only update your own products'
      });
    }

    const { data: product, error } = await supabase
      .from('products')
      .update({
        ...updateData,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        error: 'Failed to update product',
        message: error.message
      });
    }

    res.json({
      message: 'Product updated successfully',
      product
    });

  } catch (error) { 
    console.error('Update product error:', error);
    res.status(500).json({
      error: 'Failed to update product',
      message: 'Internal server error'
    });
  }
};

/**
 * Delete product (Admin/Seller only)
 */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if user can delete this product
    const { data: existingProduct } = await supabase
      .from('products')
      .select('seller_id')
      .eq('id', id)
      .single();

    if (!existingProduct) {
      return res.status(404).json({
        error: 'Product not found',
        message: 'The requested product does not exist'
      });
    }

    if (req.user.role !== 'admin' && existingProduct.seller_id !== req.user.id) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You can only delete your own products'
      });
    }

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(400).json({
        error: 'Failed to delete product',
        message: error.message
      });
    }

    res.json({
      message: 'Product deleted successfully'
    });

  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({
      error: 'Failed to delete product',
      message: 'Internal server error'
    });
  }
};

/**
 * Get product categories
 */
const getCategories = async (req, res) => {
  try {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) {
      return res.status(400).json({
        error: 'Failed to fetch categories',
        message: error.message
      });
    }

    res.json({ categories });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      error: 'Failed to fetch categories',
      message: 'Internal server error'
    });
  }
};

/**
 * Add product review
 */
const addReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, comment } = req.body;

    // Check if user already reviewed this product
    const { data: existingReview } = await supabase
      .from('reviews')
      .select('id')
      .eq('product_id', productId)
      .eq('user_id', req.user.id)
      .single();

    if (existingReview) {
      return res.status(400).json({
        error: 'Review already exists',
        message: 'You have already reviewed this product'
      });
    }

    const { data: review, error } = await supabase
      .from('reviews')
      .insert([
        {
          product_id: productId,
          user_id: req.user.id,
          rating: parseInt(rating),
          comment
        }
      ])
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        error: 'Failed to add review',
        message: error.message
      });
    }

    res.status(201).json({
      message: 'Review added successfully',
      review
    });

  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({
      error: 'Failed to add review',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  addReview
}; 