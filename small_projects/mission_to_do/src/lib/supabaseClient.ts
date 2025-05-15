import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
