// Verify environment variables for both frontend and backend
require('dotenv').config();

console.log('🔍 Verifying Environment Variables...\n');

const requiredVars = {
  'Frontend (Next.js)': {
    'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL,
    'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  'Backend (Express)': {
    'SUPABASE_URL': process.env.SUPABASE_URL,
    'SUPABASE_ANON_KEY': process.env.SUPABASE_ANON_KEY
  }
};

let allGood = true;

Object.entries(requiredVars).forEach(([section, vars]) => {
  console.log(`📋 ${section}:`);
  Object.entries(vars).forEach(([key, value]) => {
    const status = value ? '✅' : '❌';
    const displayValue = value ? `${value.substring(0, 20)}...` : 'Not set';
    console.log(`  ${status} ${key}: ${displayValue}`);
    if (!value) allGood = false;
  });
  console.log('');
});

if (allGood) {
  console.log('🎉 All environment variables are set correctly!');
  console.log('💡 Make sure to restart your development servers after setting environment variables.');
} else {
  console.log('⚠️  Some environment variables are missing.');
  console.log('\n📝 To fix this:');
  console.log('1. Create a .env.local file in your project root');
  console.log('2. Add the missing variables from your Supabase dashboard');
  console.log('3. Restart your development servers');
  console.log('\n🔗 Get your Supabase credentials from: https://supabase.com/dashboard');
} 