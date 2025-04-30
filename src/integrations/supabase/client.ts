
// This file has been modified to remove sensitive information

import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Keys removed for security
const SUPABASE_URL = "REMOVED";
const SUPABASE_PUBLISHABLE_KEY = "REMOVED";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
