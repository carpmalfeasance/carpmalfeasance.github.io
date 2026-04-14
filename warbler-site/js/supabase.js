const SUPABASE_URL = "https://lwzddnxejqrabuajyhum.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY_HERE";

// Lightweight Supabase client (no npm needed)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
