// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hxsaciuqxncinpckhalx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4c2FjaXVxeG5jaW5wY2toYWx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDg4MDYsImV4cCI6MjA1NTg4NDgwNn0.RxQcRRS21ywDoelI9gE-MaVjEoy8UImAnWP2RGntU5o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);