export const SUPABASE_URL = 'https://akevrbzcalwmiitcmifa.supabase.co';
export const SUPABASE_ANON_KEY = 'YOUR_KEY_HERE';

export const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);