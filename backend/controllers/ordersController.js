const { supabase } = require('../config/supabase');

// POST /api/orders/checkout
const createOrderFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    // Get cart items
    const { data: cartItems, error: cartError } = await supabase
      .from('cart_items')
      .select('*')
      .eq('user_id', userId);
    if (cartError) throw cartError;
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ success: false, error: 'Cart empty', message: 'No items in cart' });
    }
    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{ user_id: userId, status: 'placed' }])
      .select()
      .single();
    if (orderError) throw orderError;
    // Insert order items
    const orderItems = cartItems.map(item => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity
    }));
    const { error: orderItemsError } = await supabase
      .from('order_items')
      .insert(orderItems);
    if (orderItemsError) throw orderItemsError;
    // Clear cart
    const { error: clearError } = await supabase
      .from('cart_items')
      .delete()
      .eq('user_id', userId);
    if (clearError) throw clearError;
    res.status(201).json({ success: true, data: order, message: 'Order placed' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/orders/:user_id
const getOrderHistory = async (req, res) => {
  try {
    const { user_id } = req.params;
    if (req.user.id !== user_id && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Forbidden', message: 'Not allowed' });
    }
    const { data: orders, error } = await supabase
      .from('orders')
      .select('*, order_items(*, product:products(*))')
      .eq('user_id', user_id)
      .order('created_at', { ascending: false });
    if (error) throw error;
    res.json({ success: true, data: orders, message: 'Order history fetched' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createOrderFromCart, getOrderHistory };