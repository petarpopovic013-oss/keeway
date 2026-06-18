const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env.local', 'utf-8');
const envUrl = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/)[1].trim();
const envKey = env.match(/SUPABASE_SERVICE_ROLE_KEY=(.*)/)[1].trim();

const supabase = createClient(envUrl, envKey);

async function test() {
  const { data, error } = await supabase.from('keeway_motorcycles').select('id, name, slug').limit(5);
  console.log('Error:', error);
  console.log('Data:', data);
}
test();
