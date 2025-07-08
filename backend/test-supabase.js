// Test script to verify Supabase configuration
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

console.log('Testing Supabase Configuration...\n');

// Check environment variables
console.log('Environment Variables:');
console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Set' : '❌ Not set');
console.log('SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not set');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Not set');
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not set');

// Test Supabase connection
async function testSupabaseConnection() {
  try {
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
      console.log('\n❌ Missing environment variables. Please set them in your .env file.');
      return;
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    console.log('\nTesting Supabase connection...');
    
    // Test a simple query
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1);

    if (error) {
      console.log('❌ Supabase connection failed:', error.message);
      
      if (error.message.includes('Invalid API key')) {
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Check your Supabase project URL and API key');
        console.log('2. Make sure you\'re using the correct API key (anon key, not service role key)');
        console.log('3. Verify your Supabase project is active');
        console.log('4. Check if your IP is allowed in Supabase dashboard');
      }
    } else {
      console.log('✅ Supabase connection successful!');
    }

  } catch (error) {
    console.log('❌ Error testing Supabase:', error.message);
  }
}

testSupabaseConnection(); 