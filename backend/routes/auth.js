const express = require('express');
const router = express.Router();
const { supabaseClient } = require('../config/supabaseClient');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) return res.status(400).json({ success: false, error: error.message });
    res.status(201).json({ success: true, data, message: 'User registered. Please check your email to confirm.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ success: false, error: error.message });
    res.json({ success: true, data, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router; 