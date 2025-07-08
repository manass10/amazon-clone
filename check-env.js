// Simple environment variable checker
console.log('🔍 Checking Environment Variables...\n');

// Check if .env.local exists
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');
const envExists = fs.existsSync(envPath);

console.log(`📁 .env.local file: ${envExists ? '✅ Found' : '❌ Not found'}`);

if (envExists) {
  console.log('\n📄 .env.local content:');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n').filter(line => line.trim() && !line.startsWith('#'));
  
  lines.forEach(line => {
    const [key, ...valueParts] = line.split('=');
    const value = valueParts.join('=');
    if (key && value) {
      const displayValue = value.length > 30 ? value.substring(0, 30) + '...' : value;
      console.log(`  ${key}=${displayValue}`);
    }
  });
}

console.log('\n🌐 Current Environment Variables:');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Not set');
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Not set');

console.log('\n💡 Tips:');
console.log('1. Make sure .env.local is in the project root (same level as package.json)');
console.log('2. Restart your Next.js development server after creating .env.local');
console.log('3. Check that your Supabase URL starts with https://');
console.log('4. Verify you\'re using the anon key, not the service role key'); 