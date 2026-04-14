const SUPABASE_URL = "https://lwzddnxejqrabuajyhum.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3emRkbnhlanFyYWJ1YWp5aHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMTg4MjksImV4cCI6MjA5MTY5NDgyOX0.pGtlka3dRC1AQMZXlvOps_kXCJp_9QoGpedVLJc_wKU";

// Lightweight Supabase client (no npm needed)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
