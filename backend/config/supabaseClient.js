const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables for client');
}

// Create Supabase client for client-side/auth operations
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

module.exports = { supabaseClient }; 