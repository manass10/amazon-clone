import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://djwenunblucmzhvxdjkz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqd2VudW5ibHVjbXpodnhkamt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2NzQ5NzAsImV4cCI6MjA1MTI1MDk3MH0.7hxlbsCdjopWdIMm5j61xpmAvhcK3gJU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
