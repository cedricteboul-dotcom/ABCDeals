import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://lghhgdlgvfvbonxlfrfz.supabase.co';
const supabaseKey = 'sb_publishable_cQEU6utZz586wZpv4LMLhg_GcXvujQq';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };