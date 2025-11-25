import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Supabase URL from env:", supabaseUrl);
console.log("Supabase Anon Key from env:", supabaseAnonKey ? 'Loaded' : 'Not Loaded');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
