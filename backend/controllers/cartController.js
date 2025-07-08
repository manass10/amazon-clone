const { supabase } = require('../config/supabase');

// POST /api/cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({ success: false, error: 'productId and quantity are required' });
    }

    // Check if item already in cart
    const { data: existing, error } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId)
      .eq('product_id', productId)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // Ignore 'No rows found' error

    if (existing) {
      // Update quantity
      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity: existing.quantity + quantity })
        .eq('id', existing.id)
        .select()
        .single();
      if (error) throw error;
      return res.json({ success: true, data, message: 'Cart updated' });
    } else {
      // Insert new item
      const { data, error } = await supabase
        .from('cart_items')
        .insert([{ user_id: userId, product_id: productId, quantity }])
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json({ success: true, data, message: 'Added to cart' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { data, error } = await supabase
      .from('cart_items')
      .select('id, quantity, product:products(*)')
      .eq('user_id', userId);
    if (error) throw error;
    res.json({ success: true, data, message: 'Cart fetched' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { addToCart, getCart };