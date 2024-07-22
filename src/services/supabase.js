import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ckqvttmipdasqwufbyoz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrcXZ0dG1pcGRhc3F3dWZieW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMDMwMDcsImV4cCI6MjAzNjg3OTAwN30.S9gxwa_AI37OOoljb6_jDWmfNsie1UkjQn_ecciM7kE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
